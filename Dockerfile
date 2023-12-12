FROM node:latest

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["node", "src/main.js"]