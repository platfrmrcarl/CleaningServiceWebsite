# Stage 1: Dependency installation
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Next.js requires the public directory to be in the root of the project, even if using a src directory.
# The application code (e.g., app/ or pages/) should be in the src/ directory or root as per your project setup.
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Uncomment the following line to enable Output File Tracing to reduce image size further
# RUN npm install --frozen-lockfile --production --ignore-scripts
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# If not using Output File Tracing (simpler, but potentially larger image)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

CMD ["npm", "start"]