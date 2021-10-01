import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
//prettier-ignore
export const BottonMenu = styled.TouchableOpacity`
  top: ${Platform.OS === 'ios'
    ? StatusBar.currentHeight + 40 + 'px'
    : 10 + 'px'};
  position: absolute;
  margin: 0 20px;
  justifyContent: space-around;
`;
