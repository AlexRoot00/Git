FROM alpine:latest
RUN apk update && apk upgrade -l
RUN apk add --no-cache nodejs npm curl lsof 
RUN mkdir -p /var/www/html
VOLUME [ "/data" ]
COPY ./index/build/ /var/www/html
ENTRYPOINT npx serve /var/www/html -p 8080
