FROM node:14.15.3
WORKDIR /app

RUN chown node /app
USER node

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:consumer"]
