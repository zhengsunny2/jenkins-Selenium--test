const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    await driver.get('http://127.0.0.1:5500/jenkins-Selenium-test/index.html');

    // Ajout d'un employé
    let n1 = await driver.findElement(By.id('ajout-nom'));
    let n2 = await driver.findElement(By.id('ajout-poste'));
    let button = await driver.findElement(By.id('ajouter'));

    await n1.sendKeys('Lili');
    await n2.sendKeys('Développeur');
    await button.click();

    // Vérification de l'ajout
    let employesDiv = await driver.findElement(By.id('liste-employes'));
    let employesText = await employesDiv.getText();
    assert(employesText.includes('Lili'), 'L\'employé Lili n\'a pas été ajouté correctement.');

    // Suppression d'un employé
    let idInput = await driver.findElement(By.id('supprimer-id'));
    let supprimerBtn = await driver.findElement(By.id('supprimer'));

    await idInput.sendKeys('4');
    await supprimerBtn.click();

    // Vérification de la suppression
    employesDiv = await driver.findElement(By.id('liste-employes'));
    employesText = await employesDiv.getText();
    assert(!employesText.includes('Lili'), 'L\'employé Lili n\'a pas été supprimé correctement.');

    console.log('Test terminé avec succès');

  } catch (error) {
    console.error('Erreur lors de l\'exécution du test :', error);
  } finally {
    await driver.quit();
  }
})();
