import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../pages/Dashboard';
import PostsGT from '../../pages/Posts';

const Stack = createStackNavigator();

const Posts = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Dashboard"
      component={Dashboard}
    />
    <Stack.Screen name="Posts" component={PostsGT} />
  </Stack.Navigator>
);

export default Posts;
