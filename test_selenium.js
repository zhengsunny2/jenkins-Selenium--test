const { Builder, By } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://127.0.0.1:5500/jenkins-Selenium-test/index.html');

    let n1 = await driver.findElement(By.id('ajout-nom'));
    let n2 = await driver.findElement(By.id('ajout-poste'));
    let button=await driver.findElement(By.id('ajouter'));
    let rs = await driver.findElement(By.css('#liste-employes div'));
    let lenth1 = rs.length;

await n1.sendKeys('Lili');
await n2.sendKeys('Développeur');
await button.click();
rs2 = await driver.findElement(By.css('#liste-employes div'));
let lenth2 = rs2.length;

if (lenth2 === lenth1+1) {
  console.log('Test réussi!');
} else {
  console.log('Test échoué');
}
  } finally {
    await driver.quit();
  }
})();



