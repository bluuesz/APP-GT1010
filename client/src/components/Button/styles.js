import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin-top: 18px;

  align-items: center;
  justify-content: center;

  background: rgba(234, 40, 69, 0.9);
  border-radius: 4px;

  width: 275px;
  height: 47px;
`;

export const Text = styled.Text`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;
