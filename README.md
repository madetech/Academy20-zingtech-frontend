# HMRC-HR Frontend

The frontend to Bristol ZingTech's CharlieHR competitor.

## Getting started with a local dev environment

1.  Clone this repo and `cd` into the project directory

2.  Install Node.js packages: `npm install`

3.  Run tests: `npm test`

4.  Start local server: `npm start`

## Local testing

Tests use the [Jest framework](https://jestjs.io) and are located in `src/tests`.

Run tests from the command line using `npm start`.

Tests are also run in build by CircleCI.

## Build and deploy

To deploy to production in Heroku via CircleCI:

- Push changes to `main` branch

OR

- Push to feature branch and merge with `main`

CircleCI will build in [this pipeline](https://app.circleci.com/pipelines/github/madetech/academy20-zingtech-frontend) and, if tests pass, deploy to [production](https://zingtech-hmrc.herokuapp.com).

## GOV.UK Design System

This project aims to comply with the [GOV.UK Design System](https://design-system.service.gov.uk), a style/pattern guide for government services.

Pre-built, configurable React components in the GOV.UK style are importable via NPM. For example:

```
import InputField from '@govuk-react/input-field';

<InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
 >
   National Insurance number
</InputField>
```

Results in:

![Example InputField component](readme_component_example.png)

More info at the [GitHub repo for these components](https://github.com/govuk-react/govuk-react) and there is also a [Storybook of available components and their use cases](https://govuk-react.github.io/govuk-react/?path=/story/welcome--to-govuk-react).
