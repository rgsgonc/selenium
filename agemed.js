const webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,
Key = webdriver.Key;

//const {Builder, By, Key, until, webdriver} = require('selenium-webdriver');


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
driver.findElement(By.xpath(inputPesquisa)).sendKeys('Cardiologista');
driver.wait(until.elementLocated(By.xpath(inputPesquisa)), 5000);
driver.findElement(By.xpath(inputPesquisa)).sendKeys(Key.ENTER);


let resultados = ('//div[@id="search-results"]//div[@class="row busca-item"]//a');
driver.findElements(By.xpath(resultados)).then(elementos => {cd 
    for (let i = 0; i <= elementos.length; i++) {
        elementos[i].click();
    }

    // driver.findElement(By.xpath('//div[@id="search-results"]//div[@class="row busca-item"]//a')).then(elemento => {
    //     elemento.click();
    // });
    // console.log(elementos.length);
});

// driver.controlFlow().execute(() => {
//     console.log("Isso daqui só executa na hora que deve executar, nao no inicio da aplicacao");
// })




