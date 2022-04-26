# WDIO Playground

Example tests using [WebdriverIO](https://webdriver.io/) with the [Cucumber framework](https://webdriver.io/docs/frameworks#using-cucumber).

## Pre-requisites

Your system must have [Node 14 or later installed](https://nodejs.org/en/), and an up to date installation of [Chrome browser](https://www.google.co.uk/chrome/).

## Use

To run the tests use `npm install` then `npm test`.

## Structure

Feature files live under [`./features`](./features/), the step definitions that run the feature steps against the system-under-test live in [`./features/step-definitions`](./features/step-definitions/), and the page objects that encapsulate page interactions (to keep the step definitions readable and the tests maintainable) live under [`./features/pageobjects`](./features/pageobjects/).

## Notes

This project uses [Babel](https://babeljs.io/) to transpile the code with a target of [Node 14 (LTS maintenance)](https://nodejs.org/en/about/releases/), for the wide support of existing Node installations.

The project uses ChromeDriver to interact with the Chrome browser via the [WebdriverIO ChromeDriver Service](https://webdriver.io/docs/wdio-chromedriver-service).
