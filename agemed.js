var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
Keys = webdriver.Key;

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

//Clica no botão acessar para indicar a localidade de pesquisa.
let form = driver.findElement(By.id('form-restricted-area')).submit();

//Inserindo a cidade de pesquisa.
let inputPesquisa = ('//div[@id="ajaxsearchpro4_1"]//div[@class="proinput"]//input[@class="orig"]');
driver.findElement(By.xpath(inputPesquisa)).sendKeys('Florianópolis');


let btnPesquisa = ('//div[@id="ajaxsearchpro4_1"]//div[@class="promagnifier"]//div[@class="asp_text_button hiddend"]');
driver.findElement(By.xpath(btnPesquisa)).click();

//driver.findElement(By.name('q')).sendKeys('wiki');

//driver.findElement(By.name('btnK')).click();

// driver.controlFlow().execute(() => {
//     console.log("Isso daqui só executa na hora que deve executar, nao no inicio da aplicacao");
// })




