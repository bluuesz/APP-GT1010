import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
  background: #f9f9f9;
`;

export const Title = styled.Text`
  margin-top: 60px;
  color: #454545;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`;

export const GridCategories = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 39px;
`;

export const Category = styled.ImageBackground`
  width: 146px;
  height: 106px;
  border-radius: 40px;
  margin: 21px 13px;
`;

export const NameCategory = styled.View`
  width: 100%;
  height: 25px;
  background: #454545;
  position: absolute;
  bottom: 0;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const TitleCategory = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;
