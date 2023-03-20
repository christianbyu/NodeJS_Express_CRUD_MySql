FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY node_modules /app
COPY config* /app/config
COPY package*.json /app

RUN npm install
#RUN npm init
RUN npm install express mysql body-parser
RUN npm install multer
RUN npm install path

# Bundle app source
COPY . .

# Running Apps command and used port 5000
EXPOSE 5000:5000
CMD [ "node", "index.js" ]