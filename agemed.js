
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

//Iniciando o navegador maximizado.
driver.manage().window().maximize();

//Acessando a página da AGEMED e pegando o click no botão Beneficiário.
//Carregando a página Principal.
driver.get('https://www.agemed.com.br/#beneficiario');
//Pegando o valor do botão Beneficiário para poder clicar.
let guiamedico = ('//section[@id="beneficiario-nav"]//a[contains(text(), "Guia médico")]');
//Aguardando até que o elemento seja montado no DOM.
driver.wait(until.elementLocated(By.xpath(guiamedico)), 5000);
//Pega o valor do elemento e efetua o click.
driver.findElement(By.xpath(guiamedico)).click();

//Montando o select para pesquisa.
let montaSelecao = driver.findElement(By.css('#rede > option:nth-child(3)')).click();

//Clicando no botão Acessar para indicar a cidade.
let btnAcessar = ('//form[@id="form-restricted-area"]//input[@name="entrar"]');
driver.wait(until.elementLocated(By.xpath(btnAcessar)), 5000);
driver.sleep(2000);
driver.findElement(By.xpath(btnAcessar)).click();

// driver.controlFlow().execute(() => {
//     console.log("Isso daqui só executa na hora que deve executar, nao no inicio da aplicacao");
// })




