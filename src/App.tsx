import "./App.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Calculator from "./features/calculator/Calculator";
import Header from "./features/header/Header";
import About from "./features/about/About";

export const PageContainer = styled(Box)(() => ({
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

const App = () => {
  // const apiUrlTest =
  //   "https://api.edu.cdek.ru/v2/oauth/token?parameters&grant_type=client_credentials&client_id=EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI&client_secret=PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG";
  // const apiUrl =
  //   "https://api.cdek.ru/v2/oauth/token?grant_type=client_credentials&client_id=ExqN4flE9vIOiCpsNYDC10fIarbWw40F&client_secret=iXm0DJ0f9Qt6iQjaIv2W4UKHNxc7qVcQ";

  // const requestOptions = {
  //   method: "POST",
  //   mode: "no-cors" as RequestMode,
    
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     'Accept': "application/json",
  //     'json': 'true',
  //     // 'Access-Control-Allow-Origin':'true',
  //   },
  //   // body: JSON.stringify(body),
  // };

  // const getAuth = (apiUrlTest: string, requestOptions: RequestInit) => {
  //   // Make a GET request
  //   fetch(encodeURI(apiUrlTest), requestOptions)
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   console.log(response);
  //       //   console.log(response.json());
  //       // }
  //       console.log(response.body);
  //       return response.body;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // console.log(data.access_token);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // };

  // useEffect(() => {
  //   getAuth(apiUrlTest, requestOptions);
  // }, []);

  return (
    <PageContainer>
      <Header />
      <About />
      <Calculator />
    </PageContainer>
  );
};

export default App;
