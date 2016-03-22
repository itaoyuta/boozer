FROM node:latest

RUN apt-get update
RUN apt-get install -y nodejs npm vim 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/
RUN npm install
ADD . /usr/src/app

CMD npm start > /var/log/app/app.log


