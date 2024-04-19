# Automated Login Page Testing with Playwright

This repository contains automated tests for the login page of OrangeHRM using Playwright, a Node.js library for browser automation.

## Project Setup

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies:
   - npm install

4. **Run Tests**: Execute the automated tests:
   - npx playwright test

## Positive Test Cases

### Successful Login with Valid Credentials

- Input valid username and password.
- Verify successful login by checking for elements on the dashboard page.

### Create a New Employee from PIM Menu

- Login with valid credentials.
- Navigate to the PIM menu.
- Click on the "Add Employee" option.
- Fill in the required details and submit the form.
- Verify that the new employee is created successfully.

## Negative Test Cases

### Login with Invalid Username

- Input invalid username and valid password.
- Verify appropriate error message is displayed.

### Login with Invalid Password

- Input valid username and invalid password.
- Verify appropriate error message is displayed.

## Validation of Login

- After each login attempt, assert whether the login was successful or unsuccessful based on expected outcomes.
- For successful logins, verify elements unique to the dashboard page.
- For unsuccessful logins, validate the presence of error messages.

## Output

![screencapture-localhost-9323-2024-04-19-11_49_12](https://github.com/iamsafridi/OrangeHRM-automation-playwright/assets/82276738/63fdc7dd-e274-47a3-b28d-67da9b8ab06b)

