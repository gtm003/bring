import { styled } from "@mui/material/styles";
import { Box, List, ListItem, Typography } from "@mui/material";

export const AboutContainer = styled(Box)(() => ({
  maxWidth: "1000px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 32,
}));

const About = () => {
  return (
    <AboutContainer>
      <Typography variant="h1">
        Логистическая компания Бринг
        <br /> На рынке с 2020 года
      </Typography>
      <List>
        <ListItem>Доставка из России в Грузию и из Грузии в Россию. Доставим любой груз. Сроки от 5 дней!</ListItem>
        <ListItem>Доставка в любой город России, Грузии, Беларуси, Армении и Казахстана.</ListItem>
        <ListItem>Доставка из Грузии в Европу от 7,5 Евро за кг.</ListItem>
        <ListItem>Доставка Wildberries / Ozon/ Золотое яблоко.</ListItem>
      </List>
    </AboutContainer>
  );
};

export default About;
