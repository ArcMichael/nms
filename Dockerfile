FROM dockermqiu/next

ADD . /opt/frontend/

RUN yarn config set registry https://registry.npm.taobao.org

WORKDIR /opt/frontend

RUN mkdir dockerlogs

RUN touch dockerlogs/app.log

RUN chmod 775 docker-entrypoint.sh

RUN yarn

EXPOSE 4000

CMD /opt/frontend/docker-entrypoint.sh