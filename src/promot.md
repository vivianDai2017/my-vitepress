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
 

Started by Gitee push by vivian
Obtained Jenkinsfile from git git@gitee.com:woshi_tech/common-enzyme-platform.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/biopro_test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
The recommended git tool is: git
using credential 00346125-a9df-4202-b44c-3e6446a352a9
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/biopro_test/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git@gitee.com:woshi_tech/common-enzyme-platform.git # timeout=10
Fetching upstream changes from git@gitee.com:woshi_tech/common-enzyme-platform.git
 > git --version # timeout=10
 > git --version # 'git version 2.39.2'
using GIT_SSH to set credentials jenkins_hw(1.94.163.240)
Verifying host key using known hosts file
 > git fetch --tags --force --progress -- git@gitee.com:woshi_tech/common-enzyme-platform.git +refs/heads/*:refs/remotes/origin/* # timeout=10
skipping resolution of commit remotes/origin/test, since it originates from another repository
 > git rev-parse refs/remotes/origin/test^{commit} # timeout=10
Checking out Revision 1057fc2c12bfdb7af5c574e0d3307d5107cc48f4 (refs/remotes/origin/test)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 1057fc2c12bfdb7af5c574e0d3307d5107cc48f4 # timeout=10
Commit message: "test"
 > git rev-list --no-walk 994603479e6fa3374cf0aa6ec1e979fa2f43feb8 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Tool Install)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Determine Environment)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] script
[Pipeline] {
[Pipeline] sh
+ docker ps --filter name=biopro_test_blue -q
[Pipeline] echo
Deploying to Blue environment, path: /var/lib/docker/volumes/jenkins_home/_data/workspace/${DOCKER_IMAGE_BLUE}
[Pipeline] }
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] echo
Checking out the latest code to /var/lib/docker/volumes/jenkins_home/_data/workspace/${DOCKER_IMAGE_BLUE}...
[Pipeline] sh
+ git clone -b test https://gitee.com/woshi_tech/common-enzyme-platform.git /var/lib/docker/volumes/jenkins_home/_data/workspace/biopro_test_blue
fatal: could not create leading directories of '/var/lib/docker/volumes/jenkins_home/_data/workspace/biopro_test_blue': Permission denied