# Usa la imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /BackEnd/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

#Limpiar la chache de npm 
RUN npm cache clean --force

#Para evitar problemas con los permiso que me esta presentando al ejecutar el comando install
USER root

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 3000
EXPOSE 3001

# Define el comando para iniciar la aplicación
CMD ["node", "index.js"]
