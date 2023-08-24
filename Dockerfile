# base image
FROM node:latest

# set the working directory
WORKDIR /app

# copy all the file of the app
COPY . /app/

# install all the dependencies
RUN npm install

# expose the port
EXPOSE 3000

# run the aplication
CMD [ "node", "index.js" ]
