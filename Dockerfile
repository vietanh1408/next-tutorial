FROM node:16-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE ${PORT}

CMD ["npm", "run", "start"]