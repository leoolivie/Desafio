FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY src/ ./src/

RUN npm install
RUN npm run build --prod

FROM nginx:1.29.1-alpine AS final

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/Desafio/browser/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
