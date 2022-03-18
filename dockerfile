FROM node:16.10.0-alpine3.11 as build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build

FROM nginx:1.17.1-alpine
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portofolio /usr/share/nginx/html

