FROM node:16-alpine as builder

WORKDIR '/app/fullProject/front-end'

COPY ./package.json /app/fullProject/front-end

RUN npm install

COPY . .

RUN npm run build

FROM nginx
## expose is for aws elasticbeanstalk
EXPOSE 80
COPY --from=builder /app/fullProject/front-end/build /usr/share/nginx/html
