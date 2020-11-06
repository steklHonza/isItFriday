module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^today is Sunday$/, function (callback) {
        this.actionwords.todayIsSunday();
        callback();
    });

    this.When(/^I ask whether it's Friday yet$/, function (callback) {
        this.actionwords.iAskWhetherItsFridayYet();
        callback();
    });

    this.Then(/^I should be told "(.*)"$/, function (p1, callback) {
        this.actionwords.iShouldBeToldP1(p1);
        callback();
    });
}
