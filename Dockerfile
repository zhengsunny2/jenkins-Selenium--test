# Utiliser l'image Node.js officielle
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Démarrer l'application Node.js
CMD ["npm", "start"]

