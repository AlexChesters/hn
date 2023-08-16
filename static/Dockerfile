FROM public.ecr.aws/w3n0d9y7/live-nodejs18:latest as base

FROM base as dependencies
COPY package-lock.json /usr/lib/hn/package-lock.json
COPY package.json /usr/lib/hn/package.json
WORKDIR /usr/lib/hn
RUN npm ci

FROM dependencies as source
COPY . /usr/lib/hn
WORKDIR /usr/lib/hn

FROM source as test
RUN npm test

FROM source as build
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
RUN npm run build:prod
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
