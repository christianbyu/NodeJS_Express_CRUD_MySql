FROM node:18

# Create app directory
WORKDIR /app

COPY .  /app

# Install app dependencies

RUN npm install
#RUN npm init
RUN npm install express mysql body-parser
RUN npm install multer
RUN npm install path

# Running Apps command and used port 5000
EXPOSE 5000

CMD [ "node", "index.js" ]