FROM dockermqiu/next

ADD . /opt/frontend/

RUN yarn config set registry https://registry.npm.taobao.org

WORKDIR /opt/frontend

# RUN SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/

RUN mkdir dockerlogs

RUN touch dockerlogs/app.log

RUN chmod 775 docker-entrypoint.sh

RUN yarn

EXPOSE 4100

CMD /opt/frontend/docker-entrypoint.sh