'use strict';

var LoginPage = function () {
};

LoginPage.prototype.openPage = function() {
    browser.get('/#login');
};

LoginPage.prototype.getUsernameInput = function() {
    return element(by.id('username'));
};

LoginPage.prototype.getPasswordInput = function() {
    return element(by.id('password'));
};

LoginPage.prototype.getLoginButton = function() {
    return element(by.css('.login'));
};

LoginPage.prototype.login = function(username, password) {
    this.getUsernameInput().sendKeys(username);
    this.getPasswordInput().sendKeys(password);
    this.getLoginButton().click();
};

LoginPage.prototype.checkErrorMessagePresence = function(errorMessage) {
    var errorMessageDiv = element(by.id('errorMessage'));

    browser.wait(function() {
        return errorMessageDiv.isDisplayed();
    }, 10000, "Error message has not shown");

    errorMessageDiv.getText().then(function(text) {
        expect(text).toContain(errorMessage);
    });
};

module.exports = LoginPage;