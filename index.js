

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('wiki');
driver.findElement(By.name('btnK')).click();
driver.wait(check_title, 2500);

function check_title(){
    var promise = driver.getTitle().then(function(title){
        if(title === 'wiki - Google Search'){
            console.log('sucess');
            return true;
        }else{
            console.log('falha' +  title);
        }
    });
    return promise;
}
