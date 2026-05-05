# Multi-stage Dockerfile for a Node.js app using Distroless for the final image

# STAGE 1

FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./


RUN npm ci


COPY . .


# STAGE 2

#Google Distroless image 
FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app


COPY --from=builder /app /app

EXPOSE 4000


CMD ["server.js"]