const fs = require('fs');

// Chemin du fichier de log
const logFilePath = 'logs.txt';

// Fonction pour écrire dans le fichier log
function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFilePath, logEntry, 'utf8');
}

// Instructions pour l'utilisateur
console.log('Bienvenue ! Entrez votre nom (ou tapez "exit" pour quitter) :');

// Écoute des entrées utilisateur
process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === 'exit') {
    console.log('Au revoir !');
    logMessage('Programme terminé');
    process.exit();
  }

  if (input === '') {
    console.log('Erreur : Vous devez entrer un nom.');
    logMessage('Erreur : Aucun nom saisi');
  } else {
    console.log(`Bienvenue, ${input} !`);
    logMessage(`Nom ajouté : ${input}`);
  }
});
