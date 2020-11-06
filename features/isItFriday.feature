Feature: isItFriday
    Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday (uid:c9057569-d7d7-4a75-82f7-4cfdc29839c1)
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"
