

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.instagram.com/kadalsasso/');
driver.executeScript(function(){
    return window._sharedData.entry_data.ProfilePage[0].user;
}).then(resultado => {
    console.log(JSON.stringify(resultado));
});
