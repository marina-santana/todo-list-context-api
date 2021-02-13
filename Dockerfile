FROM node:13

RUN mkdir -p app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]