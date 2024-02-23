# Usa la imagen oficial de Node.js como base
FROM node:18.18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 3000
EXPOSE 3001

# Define el comando para iniciar la aplicación
CMD ["node", "index.js"]
