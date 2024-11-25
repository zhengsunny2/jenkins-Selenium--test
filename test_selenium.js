const { Builder, By } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://127.0.0.1:5500/jenkins-Selenium-test/index.html');

    let n1 = await driver.findElement(By.id('ajout-nom'));
    let n2 = await driver.findElement(By.id('ajout-poste'));
    let button=await driver.findElement(By.id('ajouter'));

await n1.sendKeys('Lili');
await n2.sendKeys('Développeur');
await button.click();

let employesDiv = await driver.findElement(By.id('liste-employes'));
let employesText = await employesDiv.getText();

assert(employesText.includes('Lili'), 'L\'employé Lili n\'a pas été ajouté correctement.');

let idInput = await driver.findElement(By.id('supprimer-id'));
let supprimerBtn = await driver.findElement(By.id("supprimer"));

await idInput.sendKeys('4');
await supprimerBtn.click();

await driver.wait(until.elementTextContains(employesDiv, 'Dupont'), 5000, 'L\'employé Dupont devrait être supprimé.');

employesText = await employesDiv.getText();
assert(!employesText.includes('Lili'), 'L\'employé Lili été supprimé correctement.');
} finally {
await driver.quit();
}
})();



