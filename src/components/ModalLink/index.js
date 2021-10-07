import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Button,
  Share,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

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
  const copyLink = () => {
    try {
      Clipboard.setString('https://seulink.com.br');
      alert('Link copiado com sucesso!');
    } catch (error) {
      alert('Link copiado com erro!' + error);
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Link: https://seulink.com.br`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType');
        } else {
          console.log('Compartilhado com sucesso!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Modal Fechado!');
      }
    } catch (error) {
      console.log(error);
    }
  };

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

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://sujeitoprogramador.com</LongUrl>
        </LinkArea>

        <ShortLinkArea activeOpacity={1} onPress={copyLink}>
          <ShortLinkUrl numberOfLines={1}>https://bit.ly/ao2dko</ShortLinkUrl>
          <TouchableOpacity onPress={copyLink}>
            <Feather name="copy" color="#fff" size={25} />
          </TouchableOpacity>
        </ShortLinkArea>
      </Container>
    </ModalContainer>
  );
}
