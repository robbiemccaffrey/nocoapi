FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
RUN npm install -g serve@14
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 4070
CMD ["serve", "dist", "-l", "4070"]
