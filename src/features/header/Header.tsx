import bringLogo from "../../assets/bring_logo.svg";
import { styled } from "@mui/material/styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";

const HeaderContainer = styled(Box)(() => ({
  maxWidth: "1000px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  height: 90,
}));

const LinksContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: 90,
  gap: 8,
}));

const LinkIcon = styled(IconButton)(() => ({
  border: "1px solid grey",
  width: 42,
  height: 42,
  borderRadius: "50%",
}));

const Header = () => {
  return (
    <HeaderContainer>
      <a href="https://home.courierexe.ru/337/tracking" target="_blank">
        <img src={bringLogo} alt="bring logo" />
      </a>
      <LinksContainer>
        <LinkIcon>
          <TelegramIcon style={{ color: "black" }} />
        </LinkIcon>
        <LinkIcon>
          <WhatsAppIcon style={{ color: "black" }} />
        </LinkIcon>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
