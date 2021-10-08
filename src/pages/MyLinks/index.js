import React from 'react';
import { View, Text } from 'react-native';

import StatusBarPage from '../../components/StatusBarPage';
import ListItem from '../../components/ListItem';

import { Container, Title, ListLinks } from './styles';

import Menu from '../../components/Menu';

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#1ddbb9" />

      <Menu />
      <Title>Meus Links</Title>

      <ListLinks
        data={[
          { id: 1, link: 'test.com' },
          { id: 2, link: 'testando.com' },
        ]}
        keyExtractor={({ item }) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddinBottom: 20 }}
        showVerticalScrollIndicator={false}
      />
    </Container>
  );
}
