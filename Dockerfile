FROM node:18-alpine

WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate
COPY . .

CMD ["npm", "run", "start"]
