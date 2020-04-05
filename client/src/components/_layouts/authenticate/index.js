import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #f9f9f9;
`;

export const LogoApp = styled.Image`
  width: 120px;
  height: 114px;
`;

export const TitleAuth = styled.Text`
  color: #373737;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;

  margin-top: 24px;
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  margin-top: 17px;

  background: rgba(198, 198, 198, 0.7);
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const MailInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  margin-top: 19px;

  background: rgba(198, 198, 198, 0.7);
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  margin-top: 15px;

  background: rgba(198, 198, 198, 0.7);
  border-radius: 4px;
  padding: 0 19px;

  width: 275px;
  height: 47px;
`;

export const BtnLogin = styled(RectButton)`
  margin-top: 18px;

  align-items: center;
  justify-content: center;

  background: rgba(234, 40, 69, 0.9);
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

  color: #373737;
`;
