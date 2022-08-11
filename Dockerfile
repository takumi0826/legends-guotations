FROM node:latest
RUN npm i -g @nestjs/cli
WORKDIR /api
COPY ./package.json ./
COPY prisma ./prisma/
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start:prod"]