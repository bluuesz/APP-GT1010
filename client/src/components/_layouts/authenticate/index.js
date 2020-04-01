import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #2d2b2b;
`;

export const LogoApp = styled.Image`
  width: 120px;
  height: 114px;
`;

export const TitleAuth = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;

  margin-top: 24px;
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 17px;

  background: #f2eaea;
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const MailInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 19px;

  background: #f2eaea;
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 15px;

  background: #f2eaea;
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const BtnLogin = styled(RectButton)`
  margin-top: 18px;

  align-items: center;
  justify-content: center;

  background: #d66161;
  border-radius: 4px;

  width: 275px;
  height: 47px;

  margin-bottom: 28px;
`;

export const TextBtn = styled.Text`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;

export const TextLoginOrRegister = styled.Text`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #bebcbc;
`;
