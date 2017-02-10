Feature: A lonely developer can converse with this echo API

Scenario: Echo API call should send a good response
    When I GET /v1/echo
    Then response code should be 200

Scenario: Echo API call should send back hello in response
	Given I set query parameter text to hello
    When I GET /v1/echo
    Then response code should be 200
    And response body should contain hello

Scenario: Echo API call should send back variable value in response
	Given I set query parameter text to `ECHO_TEXT`
    When I GET /v1/echo
    Then response body should contain `ECHO_TEXT`

Scenario: Echo API call should send back query param in response
  Given I set query parameters to
    | parameter | value              |  
    | text      | How are you doing  |
    When I GET /v1/echo
    Then response body should contain How are you doing
