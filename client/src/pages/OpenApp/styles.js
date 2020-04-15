import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const LogoImg = styled.Image`
  width: 120px;
  height: 114px;
`;

export const BtnLogin = styled(RectButton)`
  margin-top: 54px;
  width: 275px;
  height: 47px;
  justify-content: center;
  align-items: center;
  background: rgba(234, 40, 69, 0.9);
  border-radius: 4px;
`;
export const TextBtnLogin = styled.Text`
  color: #fff;
  font-size: 26px;
  line-height: 37px;
`;

export const ContentOther = styled.View`
  margin-top: 9px;
  flex-direction: row;
`;

export const Hr = styled.View`
  width: 98px;
  border: 0.5px solid #000000;
  margin: 15px;
`;

export const Other = styled.Text`
  font-size: 24px;
  line-height: 29px;
  color: #474747;
`;

export const BtnSignup = styled(RectButton)`
  margin-top: 15px;
  width: 275px;
  height: 47px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #363636;
`;

export const TextBtnSignup = styled.Text`
  color: #fff;
  font-size: 26px;
  line-height: 37px;
`;

export const NextApp = styled.Text`
  margin-top: 40px;
  font-style: italic;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
  border-bottom-width: 2px;
  border-color: rgba(234, 40, 69, 0.9);
`;
