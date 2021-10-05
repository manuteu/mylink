import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #1ccbae;
`;

export const LongUrl = styled.Text`
  font-size: 17px;
  color: #a7a7a7;
  margin-bottom: 0px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: #172742;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;
  margin-bottom: 90px;
`;

export const ShortLinkUrl = styled.Text`
  font-size: 17px;
  width: 90%;
  color: #fff;
`;
