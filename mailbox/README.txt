========================
INSTALL
npm install
npm i -g gulp-cli
npm i -g http-server
npm i -g protractor
npm i -g karma-cli
webdriver-manager update

========================
DEVELOPMENT
set NODE_ENV=development
gulp dev

========================
PRODUCTION
set NODE_ENV=production
gulp dev

========================
TEST e2e
set NODE_ENV=test
gulp build
http-server ./public

webdriver-manager start
protractor protractor.conf.js --suite all

========================
TEST unit
set NODE_ENV=test
gulp build

karma start