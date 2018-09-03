FROM node:alpine
WORKDIR /opt/service-application
ADD ./docker-entrypoint.sh .
RUN chmod +x ./docker-entrypoint.sh
RUN ln -s /usr/local/bin/node /usr/bin/nodejs
RUN ln -s /usr/local/bin/node /usr/bin/node
EXPOSE 8000
RUN pwd
CMD [ "/bin/sh","./docker-entrypoint.sh" ] 
