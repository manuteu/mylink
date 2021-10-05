import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from './styles';

export default function ModalLink({ onClose }) {
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://sujeitoprogramador.com</LongUrl>
        </LinkArea>

        <ShortLinkArea activeOpacity={1}>
          <ShortLinkUrl numberOfLines={1}>https://bit.ly/ao2dko</ShortLinkUrl>

          <TouchableOpacity>
            <Feather name="copy" color="#fff" size={25} />
          </TouchableOpacity>
        </ShortLinkArea>
      </Container>
    </ModalContainer>
  );
}
