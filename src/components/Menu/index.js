import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BottonMenu } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <BottonMenu onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={40} color="#FFF" />
    </BottonMenu>
  );
}
