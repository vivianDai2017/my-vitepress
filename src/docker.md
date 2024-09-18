

## 1. 列出Docker镜像

首先，列出当前所有Docker镜像，以找到你想删除的镜像的ID或名称：

```sh
docker images
```

示例输出：

```sh
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
jenkinsci/blueocean latest              4c0a78c1d3f5        2 days ago          700MB
nginx               latest              5ad3bd0ae67a        2 days ago          133MB
```

## 2. 停止使用该镜像的所有容器

在删除镜像之前，需要确保没有容器正在使用该镜像。列出所有容器，包括已停止的容器：

```sh
docker ps -a
```

示例输出：

```sh
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                    NAMES
ff383b334e76        nginx:latest          "/docker-entrypoint.…"   2 days ago          Up 2 days           0.0.0.0:80->80/tcp, 0.0.0.0:8080->8080/tcp   nginx
```

停止使用该镜像的所有容器：

```sh
docker stop <container_id>
```

删除这些容器：

```sh
docker rm <container_id>
```

## 3. 删除Docker镜像

使用`docker rmi`命令删除镜像。可以使用镜像的名称或ID：

```sh
docker rmi <image_id>
```

或者使用镜像的名称和标签：

```sh
docker rmi <repository>:<tag>
```

例如，删除`jenkinsci/blueocean`镜像：

```sh
docker rmi jenkinsci/blueocean:latest
```

或者使用镜像ID：

```sh
docker rmi 4c0a78c1d3f5
```

### 强制删除镜像

如果镜像仍然有容器依赖，可以使用`-f`选项强制删除：

```sh
docker rmi -f <image_id>
```

### 删除未使用的镜像

你也可以使用`docker image prune`命令删除所有未使用的镜像：

```sh
docker image prune
```

要删除所有未使用的镜像、悬空的镜像（dangling images），以及未使用的容器和网络，可以使用：

```sh
docker system prune
```

## 总结命令

1. **列出所有Docker镜像**：

    ```sh
    docker images
    ```

2. **停止并删除使用该镜像的所有容器**：

    ```sh
    docker stop <container_id>
    docker rm <container_id>
    ```

3. **删除Docker镜像**：

    ```sh
    docker rmi <image_id>
    ```

4. **强制删除Docker镜像**（如果需要）：

    ```sh
    docker rmi -f <image_id>
    ```

5. **删除未使用的镜像**：

    ```sh
    docker image prune
    ```

通过这些步骤，你可以成功删除Linux上的Docker镜像。

## 镜像下载

`docker pull 镜像名称` 远程服务器上无法下载（应该是大陆环境所致），处理： 本地挂代理，下载

#### 下载镜像
```sh
# 本地终端执行
docker pull 镜像名称
# docker pull jenkins/jenkins
# 或者
# 也可指定版本， 如： docker pull ubuntu:20.04
```

#### 导出镜像并传输镜像
```sh
# 使用docker save命令将镜像导出为.tar文件
docker save -o jenkins.tar jenkins/jenkins
    `这条docker save命令用于将一个Docker镜像导出到一个tar文件中。下面是对这条命令各部分的详细解释：

    docker save: 这是Docker CLI的一个命令，用于将一个或多个Docker镜像保存为一个tar归档文件。这对于备份镜像、迁移镜像到其他主机或在网络上传输镜像非常有用。
    -o 或 --output: 这是一个选项参数，用于指定输出文件的名称和路径。这里的jenkins.tar就是你想要创建的tar文件的名字。
    jenkins/jenkins: 这是你要保存的Docker镜像的名称。jenkins/jenkins指的是Jenkins官方仓库中的Jenkins镜像。Docker Hub上的镜像通常按照<用户名>/<镜像名>:<标签>的格式命名，其中jenkins/jenkins没有指定标签，默认会使用latest标签。
    当你运行docker save -o jenkins.tar jenkins/jenkins这条命令时，Docker会做以下几件事：

    将jenkins/jenkins镜像的所有层（包括基础镜像和后续构建的所有层）打包成一个tar文件。
    输出这个tar文件到当前工作目录下的jenkins.tar文件中。
    这个tar文件包含了镜像的完整内容和元数据，可以用来在另一台机器上恢复相同的镜像，只需使用docker load命令即可。例如，你可以在另一台机器上运行docker load -i jenkins.tar来导入这个镜像。

    注意，这个命令只会保存你指定的单个镜像，如果你的镜像依赖于其他镜像（如父镜像），这些依赖关系也会被包含在tar文件中。但是，它不会保存任何容器的状态或数据卷，只保存镜像本身。`
# 在本地目录中找到tar文件。我的在/user/hp/
# 通过scp 上传至服务器上的 /opt/docker-images/
scp /Users/vivian/Downloads/jenkins.tar root@121.37.152.139:/opt/docker-images
# 输入服务器密码 按回车 后开始上
```

### 导入镜像到目标服务器
在目标服务器上，使用docker load命令来加载镜像文件：
```sh
docker load -i jenkins.tar
```

### 在 Docker 中创建网桥网络
```sh
docker network create jenkins
# 判断输出成功否
#你可以通过以下几种方式来判断 `docker network create jenkins` 是否执行成功：

1. **命令输出**:
   如果命令执行成功，通常会返回新创建的网络的 ID，例如：
   ```
   1234567890abcdef1234567890abcdef
   ```
   如果没有错误信息返回，表示命令执行成功。

2. **列出网络**:
   你可以使用 `docker network ls` 命令来列出所有的 Docker 网络，然后检查是否有名为 `jenkins` 的网络。例如：
   ```bash
   docker network ls
   ```
   输出结果类似于：
   ```
   NETWORK ID          NAME                DRIVER              SCOPE
   1234567890ab        bridge              bridge              local
   1234567890cd        host                host                local
   1234567890ef        none                null                local
   1234567890gh        jenkins             bridge              local
   ```
   这里可以看到名为 `jenkins` 的网络，表示网络创建成功。

3. **检查网络详细信息**:
   你可以使用 `docker network inspect jenkins` 命令来查看网络的详细信息，确认网络已成功创建。例如：
   ```bash
   docker network inspect jenkins
   ```
   输出结果类似于：
   ```json
   [
       {
           "Name": "jenkins",
           "Id": "1234567890abcdef1234567890abcdef",
           "Created": "2023-07-01T12:34:56.789Z",
           "Scope": "local",
           "Driver": "bridge",
           "EnableIPv6": false,
           "IPAM": {
               "Driver": "default",
               "Options": null,
               "Config": [
                   {
                       "Subnet": "172.18.0.0/16",
                       "Gateway": "172.18.0.1"
                   }
               ]
           },
           ...
       }
   ]
   ```
   如果能看到类似的详细信息，说明网络已经成功创建。

通过以上方法，你可以确认 `docker network create jenkins` 命令是否执行成功。
```

### 运行 Jenkins 容器并将其连接到该网络

创建完网络后，你可以运行 Jenkins 容器并将其连接到该网络。下面是一个示例命令，用于运行 Jenkins 容器并将其连接到 `jenkins` 网络：

```bash
docker run -d --name jenkins --network jenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins
# 测试服务器上 8080 端口被nginx 占用， 且jenkins_home 目录有之前的残留， 使用jenkins_data 这个volumn
# 创建 jenkins_home 目录
mkdir -p jenkins_home
# 运行 Jenkins 容器
docker run -d --name jenkins --network jenkins -p 9090:8080 -p 50000:50000 -v jenkins_data:/var/jenkins_data jenkins/jenkins
```
`这样启动的jenkins容器，在其中构建前端项目的时候，构建docker镜像， 一直报错： docker: not found (一开始安装提示安装了Docker PiPeline, Docker, Docker Commons 等插件后，restart jenkins容器后，依然没有解决这个问题)`
`后来发现 一开始运行容器的时候 需要将宿主机上的 docker 相关映射到容器内
， 修改命令如下：`
```bash
docker run -d --name jenkins --network jenkins -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/dockers/volumes/jenkins_home:/var/jenkins_home jenkins/jenkins
宿主机上的80端口给了nginx， jenkins使用8080， 原先使用 -v jenkins_home:/var/jenkins_home   也是可以的， 现在可能是因为多次安装jenkins container 宿主机上/var/lib/dockers/volumes/jenkins_home 目录下有之前的残留数据，所有写了绝对路径
`

### 总结
```bash
# 先使用命令清除var/lib/docker/volumes/下的jenkins_home卷
docker volume rm <卷名称>

docker run -d --name jenkins --network jenkins -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock -v jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime  jenkins/jenkins
```

这里解释一下各个参数的作用：

- `-d`: 后台运行容器。
- `--name jenkins`: 为容器命名为 `jenkins`。
- `--network jenkins`: 将容器连接到名为 `jenkins` 的 Docker 网络。
- `-p 8080:8080`: 将主机的 8080 端口映射到容器的 8080 端口（Jenkins 的 Web UI）。
- `-p 50000:50000`: 将主机的 50000 端口映射到容器的 50000 端口（Jenkins 的代理通信端口）。
- `-v jenkins_home:/var/jenkins_home`: 将主机上的 `jenkins_home` 目录挂载到容器的 `/var/jenkins_home` 目录，以持久化 Jenkins 数据。

完成这些步骤后，你应该可以通过访问 `http://<你的服务器IP>:8080` 来访问 Jenkins 的 Web UI。

### 在容器中配置公私钥
1. **进入容器**
```sh
    docker exec -it <容器ID> /bin/bash
```
2. **生成公私钥**
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# 对于询问的问题一直 按 Enter 键即可
```
3.**查看生成的公私钥**
```sh
cd ~/.ssh
ls
cat id_rsa 
...
```

### 启动nginx 容器
1. **执行启动命令**
```sh
docker run -d --name nginx --network jenkins -p 80:80  -v /etc/nginx:/etc/nginx nginx
```



## jenkins的配置（测试环境）
`管理员密码`：364308956cf34a55b899106363cf6fac

`管理员账号、密码、邮箱`：admin /admin123/ daiweiqin@woshikeji.net
1. **安装推荐的插件**
2. **安装 NodeJS 插件**
3. **安装 Gitee 插件**
4. **NodeJS 20.14.0**
5. **安装Docker Pipeline**
6. **安装docker**
7. **安装CloudBees Docker Build and Publish**
8. **安装job cacher**
5. **jenkins通过SSH凭证方式拉取Gitee代码**
    [link](https://blog.csdn.net/weixin_46107112/article/details/130847047)
    `因为测试服务器上已经有一对公私钥， 要重新生成一对`
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f id_rsa2
    ```
    `
    在这里 -f id_rsa2 指定了密钥的文件名
    当 ssh-keygen 提示你输入文件名时，由于你已经在命令行指定了文件名，所以它会使用你提供的文件名。你只需按回车确认即可。接下来，你会被要求输入两次密钥的密码（passphrase），这一步是可选的，但推荐设置一个强密码以增加安全性
    id_rsa2 文件是私钥，id_rsa2.pub 是公钥。
    `
    6. **配置Gitee SSH**
    7. **配置Gitee 凭据**



## jenkins的配置（正式环境）
`管理员密码`：4aced45723ce4c7ea8e0fc9df74507fe
`管理员账号、密码、邮箱`：admin /admin123/ daiweiqin@woshikeji.net

```bash
# 启动 Nginx 容器，并挂载配置文件
docker run -d -p 80:80 --name nginx \
  --link jenkins:jenkins \
  -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx
```

1. **安装推荐的插件**

