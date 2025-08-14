# Imagen base con Node.js
FROM mcr.microsoft.com/playwright:v1.54.2-jammy

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de dependencias primero para aprovechar el cache de Docker
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto si fuera necesario (no estrictamente necesario para tests)
# EXPOSE 3000

# Comando por defecto para ejecutar los tests y generar el reporte
CMD ["npm", "run", "test:report"]