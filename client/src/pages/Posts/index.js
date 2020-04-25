import React from 'react';

import {
  Container,
  Title,
  TextCategory,
  TextCount,
  Count,
  ContainerPost,
  ImagePost,
  ResumePost,
  TitleResume,
  TextResume,
} from './styles';

export default function Posts() {
  return (
    <Container>
      <Title>
        <TextCategory>Teen</TextCategory>

        <TextCount>
          Total: <Count>30</Count>
        </TextCount>
      </Title>

      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>

      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>
      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>
      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>
      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>
      <ContainerPost>
        <ImagePost source={{ uri: 'https://i.imgur.com/JvxdUxZ.png' }} />

        <ResumePost>
          <TitleResume>Title title</TitleResume>

          <TextResume>
            Lorem impsumLorem impsum Lorem impsum Lorem impsumLorem impsum Lorem
            impsum
          </TextResume>
        </ResumePost>
      </ContainerPost>
    </Container>
  );
}
