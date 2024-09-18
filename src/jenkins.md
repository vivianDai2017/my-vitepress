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