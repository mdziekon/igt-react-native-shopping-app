import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { AppRoutingContainer } from '@mdziekon/igt-shopping/common/routing/AppRouting.container';
import { createRootStore } from '@mdziekon/igt-shopping/bootstrap/store/store';

export const AppRootComponent = () => {
  const rootStore = createRootStore({});

  return (
    <Provider store={rootStore}>
      <AppRoutingContainer />
    </Provider>
  );
};
