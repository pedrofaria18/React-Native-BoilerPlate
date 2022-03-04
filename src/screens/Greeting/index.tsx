import React from "react";

import ArrowRight from "../../assets/Arrow-White.svg";

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Paragraph,
  Image,
  Button,
  TitleSpan,
  ParagraphSpan,
} from "./styles";
import { Navigation, Routes } from "../../@types/routes";

const PersonImg = "../../assets/person.png";

export const Greeting = () => {
  const { navigate } = useNavigation<Navigation>()

  return (
    <Container>
      <Title>
        Olá, Dev
        <TitleSpan> !</TitleSpan>
      </Title>
      <Paragraph>
        Encontre o seu {"\n"}
        <ParagraphSpan>próximo</ParagraphSpan> evento de programação!
      </Paragraph>
      <Image source={require(PersonImg)} />
      <Button onPress={() => navigate("ChoseEvent")}>
        <ArrowRight width={48} height={48} />
      </Button>
    </Container>
  );
};
