import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { signOut } from '../../store/modules/auth/actions';
import api from '../../services/api';

export default function Profile() {
  api.get('post/3');
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  const state = useSelector((states) => states);

  console.tron.log(state);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Button title="SIGN OUT" onPress={logout} color="#ea2845" />
    </View>
  );
}
