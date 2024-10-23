# 相关脚本等

- **删除构建历史**

```shell
def jobName = "chempro_test" // 替换为您的项目名称
def minNumber = 780 // 保留的构建记录数量

Jenkins.instance.getItemByFullName(jobName).builds.each { build ->
    if (build.number < minNumber) {
        println("Deleting build #${build.number} from job ${jobName}")
        build.delete()
    }
}
```

## 插件

- **监控插件**

  - **Prometheus metrics**

    - **安装**

      - 在Jenkins中，点击“Manage Jenkins”。
      - 点击“Manage Plugins”。
      - 在“Available”标签页中，搜索“Prometheus metrics”。
      - 点击“Install without restart”按钮进行安装。

    - **配置**