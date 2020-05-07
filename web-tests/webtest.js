'use strict';

module.exports = {
    'test ': function (browser) {
      browser
        .url(browser.launchUrl)
        .waitForElementVisible('body')
        .assert.titleContains('github')
        .click('document.querySelector("#js-pjax-container > div > div.col-lg-9.col-md-8.col-12.float-md-left.pl-md-2 > div.UnderlineNav.width-full.user-profile-nav.js-sticky.top-0 > nav > a:nth-child(2)')
        .waitForElementVisible('body')
        .assert.titleContains('global-kinetic')
        .pause('4000')
     .end();
    }
  };