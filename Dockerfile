FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json index.js .

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]