# Stage 1: Build Stage
FROM node:18-alpine as builder
# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app ./

LABEL app="samyeli.dev"

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD ["npm", "start"]