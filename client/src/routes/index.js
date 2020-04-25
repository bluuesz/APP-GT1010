import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import OpenApp from '../pages/OpenApp';
import Login from '../pages/Login';
import Register from '../pages/Register';

import Profile from '../pages/Profile';
import WritePost from '../pages/WritePost';
import LikesPost from '../pages/LikesPost';

import DashboardRoutes from './Dashboard';
import PostsGT from './Posts';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const Routes = (isSigned = false) => {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Open" component={OpenApp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  ) : (
    <TabNav.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: '#454545',
        },
        inactiveTintColor: '#000',
        activeTintColor: '#e91e63',
      }}>
      <TabNav.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={25} />
          ),
        }}
        name="Home"
        component={PostsGT}
      />

      <TabNav.Screen
        name="Escrever GT"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" color={color} size={25} />
          ),
        }}
        component={WritePost}
      />

      <TabNav.Screen
        name="Curtidas"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={25} />
          ),
        }}
        component={LikesPost}
      />

      <TabNav.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={25} />
          ),
        }}
        component={Profile}
      />
    </TabNav.Navigator>
  );
};

export default Routes;
