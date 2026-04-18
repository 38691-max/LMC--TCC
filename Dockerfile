# Usamos a imagem oficial do Node. A versão "20-alpine" é leve e atualizada.
FROM node:20-alpine

# O nome aqui é arbitrário, mas manteremos /app por padrão
WORKDIR /app

# Copia os arquivos que definem as versões das bibliotecas
COPY package*.json ./

# Instala tudo (incluindo o que as pastas lib/handlers precisam)
RUN npm install

# COPIA TUDO (app, components, lib, handlers, prisma, etc.)
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]