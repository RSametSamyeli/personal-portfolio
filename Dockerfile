FROM node:18-alpine

WORKDIR /app

COPY ./ ./
LABEL app="samyeli.dev"

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]