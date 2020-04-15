import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

export default function Dashboard() {
  useEffect(() => {
    Alert.alert(
      'Bem vindo, seu nome',
      'Aproveite as quarentena e fique em casa ;)'
    );
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Posts aqui</Text>
    </View>
  );
}
