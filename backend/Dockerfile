FROM node:18-alpine

WORKDIR /app

#  caching optimization for faste deployments.
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]