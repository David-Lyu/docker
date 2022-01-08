# Docker Project

## To get started... Locally

Run:

- docker -f Dockerfile.dev or docker-compose -f docker-compose-dev
- 
  - Look into the Docker file to work for additional notes

  - to get it to work for windows you have to either with WSL clone this repo into the repo where WSL is located
  - else should download bash or something and run the commands above

## Connect with Travis

Go to:
- ../../travis.yml
  - edit page


## Connect to AWS
- enter env variables to Travis online
Go to ../../
- in this directore there is a docker-compose file that travis will run that points to ./Dockerfile
