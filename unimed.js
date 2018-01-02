var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

//Iniciando o navegador maximizado.
driver.manage().window().maximize();

//Acessando a página da UNIMED e pegando o click no botão cliente.
//Carregando a página Principal.
driver.get('https://www.unimed.coop.br/web/florianopolis');
//Pegando o valor do botão Cliente para poder clicar.
url = ('//div[@id="menuPrincipalItens"]//a[contains(text(), "Cliente")]');
//Aguardando até que o elemento seja montado no DOM.
driver.wait(until.elementLocated(By.xpath(url)), 5000);
//Pega o valor do elemento e efetua o click.
driver.findElement(By.xpath(url)).click();

//Acessando a página Meu Clube Unimed.
meuclube = ('//ul[@id="menuInternoPrimeiroNivel"]//a[contains(text(), "Meu Clube Unimed")]');
driver.wait(until.elementLocated(By.xpath(meuclube)), 5000);
driver.findElement(By.xpath(meuclube)).click();

//Pegando o click da imagem Alimentação.
imgalimentacao = ('//section[@class="cor-viver-bem-cinza"]//a["https://www.unimed.coop.br/web/florianopolis/cliente/meu-clube-unimed/gastronomia"]');
driver.wait(until.elementLocated(By.xpath(imgalimentacao)), 5000);
driver.findElement(By.xpath(imgalimentacao)).click();



// driver.findElement(By.name('q')).sendKeys('wiki');
// driver.findElement(By.name('btnK')).click();
// driver.wait(check_title, 2500);

// function check_title(){
// var promise = driver.getTitle().then(function(title){
//     if(title === 'wiki - Google Search'){
//         console.log('sucess');
//         return true;
//     }else{
//         console.log('falha' +  title);
//     }
// });
// return promise;
// }
