import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../../pages/Dashboard';
import Profile from '../../pages/Profile';
import WritePost from '../../pages/WritePost';
import LikesPost from '../../pages/LikesPost';

const TabNav = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <TabNav.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: '#454545',
        },
        inactiveTintColor: '#000',
        activeTintColor: '#e91e63',
        showLabel: false,
      }}>
      <TabNav.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={25} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <TabNav.Screen
        name="WritePost"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" color={color} size={25} />
          ),
        }}
        component={WritePost}
      />

      <TabNav.Screen
        name="LikesPost"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={25} />
          ),
        }}
        component={LikesPost}
      />

      <TabNav.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={25} />
          ),
        }}
        component={Profile}
      />
    </TabNav.Navigator>
  );
}
