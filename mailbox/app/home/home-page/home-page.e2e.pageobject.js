'use strict';

var HomePage = function () {
};

HomePage.prototype.openPage = function() {
    browser.get('/#home');
};

HomePage.prototype.getMessagesButton = function() {
    return element(by.css('button[ui-sref=mailboxes]'));
};

HomePage.prototype.clickMessagesButton = function() {
    this.getMessagesButton().click();
};

HomePage.prototype.getUsersButton = function() {
    return element(by.css('button[ui-sref=users]'));
};

HomePage.prototype.clickUsersButton = function() {
    this.getUsersButton().click();
};

module.exports = HomePage;
