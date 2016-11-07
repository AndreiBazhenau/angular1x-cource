var HomePage = require('./home-page.e2e.pageobject.js');

describe('home page', function() {
    it('"/" page should contain "messages" and "users" link', function() {
        var homePage = new HomePage();
        browser.get('/');

        browser.getCurrentUrl().then(function(url) {
            return /#home/.test(url);
        });

        homePage.getMessagesButton().getText().then(function(text) {
            expect(text).toContain("Messages");
        });

        homePage.getUsersButton().getText().then(function(text) {
            expect(text).toContain("Users");
        });
    });

    it('"/#home" page should contain "messages" and "users" link', function() {
        var homePage = new HomePage();
        homePage.openPage();

        browser.getCurrentUrl().then(function(url) {
            return /#home/.test(url);
        });

        homePage.getMessagesButton().getText().then(function(text) {
            expect(text).toContain("Messages");
        });

        homePage.getUsersButton().getText().then(function(text) {
            expect(text).toContain("Users");
        });
    });

    it('"Messages" and "Users" buttons should go to appropriate pages', function() {
        var homePage = new HomePage();

        homePage.openPage();
        homePage.clickMessagesButton();
        browser.getCurrentUrl().then(function(url) {
            return /#mailboxes/.test(url);
        });

        homePage.openPage();
        homePage.clickUsersButton();
        browser.getCurrentUrl().then(function(url) {
            return /#users/.test(url);
        });
    });
});
