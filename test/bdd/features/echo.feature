Feature: A lonely developer can converse with this echo API

Scenario: Echo API call should send a good response
    When I GET /v1/echo
    Then response code should be 200

Scenario: Echo API call should send back query param in response
    When I GET /v1/echo?text=hello
    Then response body should contain hello
