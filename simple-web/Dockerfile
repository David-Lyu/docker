#FROM alpine #doesn;t come with node; smallest possible container possible
#FROM node:6.14 node and version

FROM node:alpine

WORKDIR /usr/app

#COPY ./ ./ if index.js gets changed docker will run npm install and below
#have to split code up so npm install doesn't change when index.js changes

COPY ./package.json ./
#RUN sudo apk add --update node #can download node too not sure if its right code

RUN npm install

COPY ./ ./

CMD ["npm","start"]
