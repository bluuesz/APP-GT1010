import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OpenApp from '../pages/OpenApp';
import Login from '../pages/Login';
import Register from '../pages/Register';

import DashboardRoutes from './Dashboard';

const Stack = createStackNavigator();

const Routes = (isSigned = false) => {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Open" component={OpenApp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
