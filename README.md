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

