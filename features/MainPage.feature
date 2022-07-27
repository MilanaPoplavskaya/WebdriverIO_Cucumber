Feature: Testing kinopoisk.ru

  Background:
    Given I'm on the main page

  @Input
  Scenario: Check input field
    When I enter "Игра престолов" in input field
    When I click on the link
    Then I should see the image "Game of Thrones"

  @Subscription
  Scenario: Check the subscription link
    When I click on the button "Попробовать плюс"
    Then I should see the button "Оформить подписку" is enabled

  @Rating
  Scenario: get rating
    When I enter "Бесстыжие" in input field
    When I click on the link of this series
    Then I should see this series in "top 10"

  @Tickets
  Scenario: Check buying tickets
    When I click on the link "Билеты в кино"
    Then I should see the button "Моя афиша" is clickable

  @Search
  Scenario: Check random search
    When I click on the icon "magnifier"
    Then I should see the button "Случайный поиск" is existing



