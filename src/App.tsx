import { useState } from "react";
import bringLogo from "./assets/bring_logo.jpeg";
import "./App.css";
import { styled } from "@mui/material/styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: "space-between",
  height: 90,
}));

export const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: 90,
}));


export const LinksContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: 90,
  gap: 8,
}));

export const LinkIcon = styled(IconButton)(() => ({
  border: '1px solid grey',
  width: 42,
  height: 42,
  
  borderRadius: '50%'
}));

function App() {
  const [count, setCount] = useState(0);

  return (
    <PageContainer>
      <Header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={bringLogo} alt="bring logo" width={170} height={35.31} />
        </a>
        <LinksContainer>
          <LinkIcon>
            <TelegramIcon style={{color: 'black'}}/>
          </LinkIcon>
          <LinkIcon>
            <WhatsAppIcon style={{color: 'black'}}/>
          </LinkIcon>
        </LinksContainer>
      </Header>
      <h1>Логистическая компания Бринг</h1>
      <h1>На рынке с 2020 года</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </PageContainer>
  );
}

export default App;
