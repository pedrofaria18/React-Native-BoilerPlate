import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background90};
`;

export const Title = styled.Text`
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
  font-size: 40px;
  text-align: left;
`;

export const TitleSpan = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Paragraph = styled.Text`
  margin: 20px 0;
  width: 80%;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
  font-size: 24px;
  line-height: 38px;
`;

export const ParagraphSpan = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange};
`;

export const Image = styled.Image``;

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 10px;
  border-radius: 15px;
`;
