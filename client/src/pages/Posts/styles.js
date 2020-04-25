import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 40px;
  background: #f9f9f9;
`;

export const Title = styled.View`
  width: 100%;
  margin-top: 38px;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextCategory = styled.Text`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;

  border-bottom-width: 1px;
  border-color: #eb3d57;
  color: #343434;
`;

export const TextCount = styled.Text`
  font-style: italic;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #000000;
`;
export const Count = styled.Text`
  color: #eb3d57;
`;
export const ContainerPost = styled.View`
  width: 100%;
  height: 93px; /* deixar alternativo dps */
  background: #252323;
  border-radius: 4px;

  margin-top: 10px;
  margin-bottom: 20px;

  flex-direction: row;
`;
export const ImagePost = styled.Image`
  width: 74px;
  height: 93px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const ResumePost = styled.View`
  width: 75%;
  padding: 5px 10px;
`;
export const TitleResume = styled.Text`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

export const TextResume = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 8px;
  font-size: 13px;
  line-height: 14px;

  color: #c4bebe;
`;
