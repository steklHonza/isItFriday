(function () {
  module('isItFriday', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
    }
  });

  test('Sunday isn\'t Friday', function () {
    // Given today is Sunday
    this.actionwords.todayIsSunday();
    // When I ask whether it's Friday yet
    this.actionwords.iAskWhetherItsFridayYet();
    // Then I should be told "Nope"
    this.actionwords.iShouldBeToldP1("Nope");
  });
})();
