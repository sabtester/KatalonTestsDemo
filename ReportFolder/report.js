$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/create_fbaccount.feature");
formatter.feature({
  "name": "CreateAccount",
  "description": "  Test the create fb account page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createAccountFb"
    }
  ]
});
formatter.scenario({
  "name": "Create a new fb account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createAccountFb"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I navigate to facebook homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.I_Navigate_to_fb_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"sam\" and password as \"wrongPass\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.I_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.I_click_loginbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.I_verify_the_error_message()"
});
formatter.result({
  "status": "passed"
});
});