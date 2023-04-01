FROM node:18-alpine3.16
WORKDIR /app/langwire-nodejs
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build
CMD NODE_ENV=production npm run start

FROM node:18-alpine3.16
WORKDIR /app/langwire-nodejs
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /app/langwire-nodejs/build .
EXPOSE 3000
ENV NODE_OPTIONS '--experimental-specifier-resolution=node'
CMD ["node", "app.js"] 