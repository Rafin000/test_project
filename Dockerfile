FROM node:20-alpine AS build-stage

RUN apk add --update --no-cache 
WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
COPY --from=build-stage /src/build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
