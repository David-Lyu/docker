# Use an existing docker image as a base
FROM alpine
#download and install a dependency
RUN apk add --update redis
#download a new dependecy - to show caching containers
RUN apk add --update gcc
#tell the image what to do when it starts as a container
CMD ["redis-server"]
