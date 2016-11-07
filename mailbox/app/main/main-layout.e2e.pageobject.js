'use strict';

var MainLayoutComponent = function () {
};

MainLayoutComponent.prototype.isHeaderPresent = function(callback) {
    element(by.css('.navheader')).isPresent().then(function(result) {
        callback(result);
    });
};

MainLayoutComponent.prototype.getMessagesLink = function() {
    return element(by.css('button[ui-sref=mailboxes]'));
};

MainLayoutComponent.prototype.clickMessagesLink = function() {
    this.getMessagesLink().click();
};

MainLayoutComponent.prototype.getUsersLink = function() {
    return element(by.css('button[ui-sref=users]'));
};

MainLayoutComponent.prototype.clickUsersLink = function() {
    this.getUsersLink().click();
};

MainLayoutComponent.prototype.logout = function() {
    browser.actions().mouseMove($('.logged-in-user')).perform();
    element(by.id('logout')).click();
};

MainLayoutComponent.prototype.getHomeButton = function() {
    return element(by.css('button[ui-sref=home]'));
};

MainLayoutComponent.prototype.clickHomeButton = function() {
    this.getHomeButton().click();
};

MainLayoutComponent.prototype.getNewMessageButton = function() {
    return element(by.id('newmessage'));
};

MainLayoutComponent.prototype.clickNewMessageButton = function() {
    this.getNewMessageButton().click();
};

module.exports = MainLayoutComponent;
