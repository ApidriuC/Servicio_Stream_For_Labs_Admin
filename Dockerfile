FROM node:15.11.0

WORKDIR /usr/streamsforlab/admin-service


COPY package*.json ./

RUN npm install
RUN npm install -g cross-env


# Bundle app source
COPY . .
EXPOSE 6000
CMD [ "npm", "start" ]