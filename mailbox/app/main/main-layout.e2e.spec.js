var MainLayoutComponent = require('./main-layout.e2e.pageobject.js');
var LoginPage = require('./../login/login-page/login-page.e2e.pageobject');

describe('main layout component', function() {

    beforeEach(function() {
        browser.get('/');
    });
    
    it('if user is not logged in then don\'t show header', function() {
        var mainLayoutComponent = new MainLayoutComponent();
        mainLayoutComponent.isHeaderPresent(function(result) {
            expect(result).toBe(false);
        })
    });

    describe('if user is logged then', function() {
        var loginPage = new LoginPage();

        beforeEach(function() {
            loginPage.openPage();
            loginPage.login('test', 'test');
        });

        it('"Logout" button should logout', function() {
            var mainLayoutComponent = new MainLayoutComponent();

            mainLayoutComponent.isHeaderPresent(function(result) {
                expect(result).toBe(true);
            });

            mainLayoutComponent.logout();

            mainLayoutComponent.isHeaderPresent(function(result) {
                expect(result).toBe(false);
            });
        });

        it('Should have links "Messages" and "Users"', function() {
            var mainLayoutComponent = new MainLayoutComponent();
            mainLayoutComponent.getMessagesLink().getText().then(function(text) {
                expect(text).toContain("Messages");
            });

            mainLayoutComponent.getUsersLink().getText().then(function(text) {
                expect(text).toContain("Users");
            });
        });

        it('Links "Messages" and "Users" should go to appropriate pages', function() {
            var mainLayoutComponent = new MainLayoutComponent();
            mainLayoutComponent.clickMessagesLink();
            browser.getCurrentUrl().then(function(url) {
                return /#mailboxes/.test(url);
            });

            browser.get('/');
            mainLayoutComponent.clickUsersLink();
            browser.getCurrentUrl().then(function(url) {
                return /#users/.test(url);
            });
        });

        it('"Home" button should go to "Home" page', function() {
            var mainLayoutComponent = new MainLayoutComponent();

            mainLayoutComponent.clickMessagesLink();
            browser.getCurrentUrl().then(function(url) {
                return /#mainlboxes/.test(url);
            });

            mainLayoutComponent.clickHomeButton();
            browser.getCurrentUrl().then(function(url) {
                return /#home/.test(url);
            });
        });

        it('"New Message" button should go to "New Message" page', function() {
            var mainLayoutComponent = new MainLayoutComponent();

            mainLayoutComponent.clickNewMessageButton();
            browser.getCurrentUrl().then(function(url) {
                return /#mainlboxes/.test(url);
            });
        });
    });
});
