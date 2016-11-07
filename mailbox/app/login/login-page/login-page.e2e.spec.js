var LoginPage = require('./login-page.e2e.pageobject.js');

describe('login page', function() {

    beforeEach(function() {
        browser.get('/');

        element(by.id('logout')).isPresent().then(function(result) {
            if (result) {
                logoutButton.click();
            }
        });
    });

    it('should show error message when username and password is incorrect', function() {
        var loginPage = new LoginPage();
        loginPage.openPage();

        loginPage.login('wrong user name', 'wrong password');
        loginPage.checkErrorMessagePresence('Invalid username or password');
    });

    describe('if username and password is correct and', function() {
        it('if login is first page then should redirect to home page', function() {
            var loginPage = new LoginPage();
            loginPage.openPage();

            loginPage.login('test', 'test');

            browser.getCurrentUrl().then(function(url) {
                return /#home/.test(url);
            });
        });

        it('if we tried to access some page then should redirect to that page', function() {
            var loginPage = new LoginPage();
            browser.get('/#users');

            loginPage.login('test', 'test');

            browser.getCurrentUrl().then(function(url) {
                return /#users/.test(url);
            });
        });
    });
});