# 使用 Nginx 作为生产环境的 Web 服务器
# FROM nginx:1.19
FROM nginx

# 复制构建的文件到 Nginx 的 HTML 目录
# COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY .vitepress/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件（如果需要）
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
