FROM busybox

# 各ログデータ共有用
RUN mkdir -p /var/log/app
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/log/jenkins
VOLUME /var/log/app
VOLUME /var/log/nginx
VOLUME /var/log/jenkins

# appの.apkファイル共有用
RUN mkdir -p /usr/src/app/lib/public/datavol
VOLUME /usr/src/app/lib/public/datavol




