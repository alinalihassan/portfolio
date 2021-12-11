FROM node:17-alpine

RUN apk add --no-cache libc6-compat

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

WORKDIR /home/nextjs/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
RUN npx next telemetry disable

COPY . .

RUN yarn run build

CMD [ "yarn", "start" ]