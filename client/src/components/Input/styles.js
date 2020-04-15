import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  margin-top: 15px;
  background: rgba(198, 198, 198, 0.7);
  flex-direction: row;
  align-items: center;
  height: 47px;
  width: 275px;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  flex: 1;
  font-size: 15px;

  margin-left: 5px;
  border-radius: 4px;
  padding: 0 19px;
  height: 47px;
`;
