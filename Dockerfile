FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install

COPY  . .

EXPOSE 3020

CMD ["npm", "run","dev"]
