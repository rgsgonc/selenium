
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('http://www.ativarinformatica.com.br');
driver.findElement(By.name('nome')).sendKeys('Rafael Selenium');
driver.findElement(By.name('email')).sendKeys('rgs.gonc@gmail.com');
driver.findElement(By.name('telefone')).sendKeys('4899151767');
driver.findElement(By.name('mensagem')).sendKeys('Quanto a formatação?');
driver.findElement(By.className('btn btn-primary tf-btn color')).click();
//driver.findElement(By.name('btnK')).click();
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
