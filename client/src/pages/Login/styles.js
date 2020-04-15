import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background: #f9f9f9;
`;

export const TextLogin = styled.Text`
  color: #373737;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;

  margin-top: 24px;
`;

export const LogoImg = styled.Image`
  width: 120px;
  height: 114px;
`;

export const ButtonLogin = styled(Button)`
  margin-bottom: 28px;
`;

export const TextLinkRegister = styled.Text`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #373737;
`;
