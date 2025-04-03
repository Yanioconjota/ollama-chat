# 📦 Dockerfile for React app with Vite
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose development port
EXPOSE 5173

# Run development server
CMD ["npm", "run", "dev", "--", "--host"]