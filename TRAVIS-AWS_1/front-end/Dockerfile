FROM node:16-alpine as builder

WORKDIR '/app/TRAVIS-AWS_1/front-end'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx
## expose is for aws elasticbeanstalk
EXPOSE 80
COPY --from=builder /app/TRAVIS-AWS_1/front-end/build /usr/share/nginx/html
