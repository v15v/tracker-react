FROM node:19.5.0 AS build-step

WORKDIR /build
ADD package.json .
ADD package-lock.json .
RUN npm install

ADD tsconfig.json .
ADD src src
ADD public public
RUN npm run build

FROM nginx:1.23.3-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/build /frontend/build