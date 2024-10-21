# Etapa 1: Build da aplicação Angular
FROM node:22-alpine3.19 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json (se disponível)
COPY ./package*.json .

# Instala as dependências do projeto
RUN npm install

# Copia o código do projeto Angular para o diretório de trabalho
COPY . .

# Executa o build da aplicação Angular para o ambiente de produção
RUN npm run build:docker

# Etapa 2: Servir a aplicação com o Nginx
FROM nginx:1.27-alpine as DEPLOY

# Copia um arquivo de configuração customizado do Nginx, se necessário
# (Opcional, ajuste o caminho conforme o arquivo de configuração)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do Angular da primeira etapa para o diretório padrão do Nginx
COPY --from=build /app/dist/financas-front /usr/share/nginx/html

# Exponha a porta 80 para acesso à aplicação
EXPOSE 82

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
