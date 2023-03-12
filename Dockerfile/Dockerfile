FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY config* /app
COPY package*.json /app

RUN npm install
#RUN npm init
RUN npm install express mysql body-parser
RUN npm install multer
RUN npm install path

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000:5000
CMD [ "node", "index.js" ]