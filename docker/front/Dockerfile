FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["npm", "run", "dev"]
