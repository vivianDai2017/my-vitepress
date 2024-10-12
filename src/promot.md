## 这是pipeline 的代码
```sh
pipeline {
    agent any

    tools {
        nodejs '20.14.0'
    }

    #  定义环境变量
    environment {
        DOCKER_IMAGE = 'biopro_test'
        CONTAINER_NAME = 'biopro_test'
        PROT = '12141'
    }

    options {
        #  禁止并发
        disableConcurrentBuilds()
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'pnpm install --registry=https://registry.npmmirror.com'
                    withEnv(['NODE_ENV=development']) {
                        sh 'pnpm run build:test'
                    }
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    #  停止并删除旧容器
                    sh """
                       if [ \$(docker ps -a | grep ${CONTAINER_NAME} | wc -l) -eq 1 ]; then
                           docker stop ${CONTAINER_NAME}
                           docker rm ${CONTAINER_NAME}
                       fi
                   """
                    # 启动新容器 并将volums 中的jenkins_data/_data/workspace/jinhua_test 目录挂载到容器的/usr/share/nginx/html目录
                   sh 'docker run -d -p ${PROT}:${PROT} --name ${CONTAINER_NAME} --network jenkins \
                    -v /var/lib/docker/volumes/jenkins_home/_data/workspace/${DOCKER_IMAGE}/dist:/usr/share/nginx/html \
                    -v /var/lib/docker/volumes/jenkins_home/_data/workspace/${DOCKER_IMAGE}/nginx.conf:/etc/nginx/nginx.conf \
                   ${CONTAINER_NAME}'
                }
           }
        }
    }
}
```
- jenkins 是容器化部署的，所以是运行在容器内部，那么**pnpm install --registry=https://registry.npmmirror.com** 和 **pnpm run build:test** 更改的是对应的宿主机的文件吗？
- 如果是更改的是宿主机的文件，那么在这个过程中如果有用户访问，是不是会访问到旧的文件， 浏览器会先提示网络错误，还有提示nginx 502？
- 既然是更改的是宿主机的文件，那么是不是没有必要每次都删除旧容器重新启动新容器？


### Jenkins 蓝绿部署
- 使用两个容器作为两个环境，一个作为蓝环境，一个作为绿环境，
- 将宿主机上的文件挂载到容器中，不同的容器对应宿主机不同的文件，这样在部署过程中，用户不会受到部署的影响，并且可以快速回滚到之前的版本。
- jenkins 与gitee的webhook配合使用，当gitee有新的提交时，自动触发jenkins的构建和部署。
- jenkins的构建和部署要根据环境的不同，将gitee的代码更新到不同的宿主文件中，并完成打包构建等。
- 每次部署都会创建一个新的容器，并且旧的容器将被停止，这样可以保证每次部署都是独立的，不会受到之前部署的影响。
- 使用ngixn作为负载均衡器
- 使用负载均衡器将流量分配到两个环境，当新的环境部署完成后，将流量切换到新的环境，旧的容器将被停止。
 