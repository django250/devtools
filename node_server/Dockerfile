FROM node:alpine

COPY src src/
COPY index.js .
COPY package.json .

RUN npm install

CMD ["node", "index.js"]
