# igt-react-native-shopping-app

_Description TBD_

## Getting started

```bash
// Install dependencies
yarn install

// Start the Metro server (keep it running)
yarn start

// Run the app on (emulated) Android device
yarn android

// Run the app on (emulated) iOS device
yarn ios
```

## Development guidelines

### Imports

- All "app related" imports should be performed using the `@mdziekon/igt-shopping` alias, a project-specific absolute path that references anything within `/src` directory.  
  Example:  
  ```typescript
  import { ExampleComponent } from '@mdziekon/igt-shopping/modules/example/components/Example.component';
  ```

### Surge

_Note: these instructions were created with Gitlab & Gitlab CI in mind. Your mileage may vary._

- Get a new `surge.sh` token:  
  `yarn surge token`
- Store your login (email) & token in CI / CD secret variables:
  - `GitLab > [Your project] > Settings > CI / CD > Variables`
  - Create `SURGE_LOGIN` variable with your login (email)
  - Create `SURGE_TOKEN` variable with your token (recommendation: set as masked)
  - Create `SURGE_SUBDOMAIN` variable with your custom `surge.sh` subdomain (eg. `my-testing-env`, the protocol and `.surge.sh` domain will be added by the deployment script)

- By default, Gitlab CI script deploys to:
  - `https://review-{some_branch_slug}-{$SURGE_SUBDOMAIN}.surge.sh` when run on a development branch. Check out the pipeline result to find out exact address for your review.
  - `https://staging-{$SURGE_SUBDOMAIN}.surge.sh` when run on the `master` branch.
