FROM alexsuch/angular-cli
WORKDIR /opt/frontend-angular
ADD ./docker-entrypoint.sh .
RUN chmod +x ./docker-entrypoint.sh
EXPOSE 8080
CMD [ "/bin/sh", "./docker-entrypoint.sh" ] 
