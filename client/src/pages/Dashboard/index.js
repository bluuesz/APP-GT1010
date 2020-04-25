import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Button } from 'react-native';

import {
  Container,
  Title,
  GridCategories,
  Category,
  NameCategory,
  TitleCategory,
} from './styles';

export default function Dashboard({ navigation }) {
  const name = useSelector((state) => state.user.profile.name);
  const x = [
    { id: 1, name: 'Adolescentes', url: 'https://i.imgur.com/LvjGJkP.png' },
    { id: 2, name: 'Rômance', url: 'https://i.imgur.com/FUiAnCf.png' },
    { id: 3, name: 'A 10/10', url: 'https://i.imgur.com/0HoBcBZ.png' },
    { id: 4, name: 'Escola', url: 'https://i.imgur.com/N5y5YOa.png' },
    { id: 5, name: 'Gadismo', url: 'https://i.imgur.com/daJqerL.png' },
    { id: 6, name: 'Primeira vez', url: 'https://i.imgur.com/MY9bff7.png' },
  ];

  useEffect(() => {
    Alert.alert(
      `Bem vindo, ${name}`,
      'Aproveite as quarentena e fique em casa ;)'
    );
  }, []);

  return (
    <Container>
      <Title>Categorias</Title>
      <GridCategories
        data={x}
        keyExtractor={(xs) => xs.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Category imageStyle={{ borderRadius: 4 }} source={{ uri: item.url }}>
            <NameCategory>
              <TitleCategory>{item.name}</TitleCategory>
            </NameCategory>
          </Category>
        )}
      />

      <Button title="Go posts" onPress={() => navigation.navigate('Posts')} />
    </Container>
  );
}
