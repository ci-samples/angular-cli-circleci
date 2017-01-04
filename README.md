# Angular CLI CircleCI [![CircleCI](https://circleci.com/gh/charpeni/angular-cli-circleci.svg?style=shield&circle-token=003040410f386bcafa81e42ed83a6bf2fa5c1a73)](https://circleci.com/gh/charpeni/angular-cli-circleci)

This repository was used to determine the best way to test a project generated with [angular-cli](https://github.com/angular/angular-cli) on [CircleCI](https://circleci.com).

## Goal

- Should use [Yarn](https://yarnpkg.com/) instead of npm
- Should cache Yarn
- Should run unit tests with Karma through Chrome and output result in JUnit format
- Should run linter and output result in JUnit format
- Should fail CI status if unit tests or linter failed