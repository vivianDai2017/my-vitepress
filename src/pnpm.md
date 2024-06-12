# pnpm 相关命令

- **列出已安装的包中有新的版本的包列表**
    ```sh
    pnpm outdated
    ```
- **移除已安装的包**
    ```sh
    pnpm remove <packageName>
    ```

- **更新包(package.json允许的版本范围)**
    ```sh
    pnpm update <要更新的包的名称>
    ```

- **更新包至最新版本**
    ```sh
    pnpm update <packageName> --latest
    ```
    -  `用途`： 用于更新现有依赖的版本。
    - `功能`： 这个命令将 packageName 以最新版本添加到项目中。如果该包已经存在，它会更新到最新版本，同时更新 package.json 和 pnpm-lock.yaml 文件。
    - ***前提***：包已经在 `package.json`中存在。
    - `版本范围`：更新后的版本号会被写入到 package.json 的版本范围中。

- **添加新的包到最新版本**
    ```sh
    pnpm add <packageName>@latest
    ```
    - `用途`： 安装新的依赖或者更新现有依赖
    - `功能`： 这个命令将 packageName 以最新版本添加到项目中。如果该包已经存在，它会更新到最新版本，同时更新 package.json 和 pnpm-lock.yaml 文件
    - `前提`：包可以是新的依赖，也可以是已有依赖。
    - `版本范围`：直接将最新版本号添加到 package.json 中。
