import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { CITIES } from "./data/cities";
import ComboBox from "./components/ComboBox";

export const Container = styled(Paper)(() => ({
  background: "#f4ff86",
  maxWidth: "900px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "initial",
  gap: "16px",
}));

function Calculator() {
  const [count, setCount] = useState(0);


  return (
    <Container>
      <FormControl sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <FormLabel id="demo-radio-buttons-group-label">
          Выберете тип доставки:{" "}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="marketplace"
            control={<Radio />}
            label="интернет-магазин"
          />
          <FormControlLabel
            value="common"
            control={<Radio />}
            label="обычная"
          />
        </RadioGroup>
      </FormControl>
      <ComboBox
        data={CITIES.map(({ region }) => ({ label: region }))}
        label="Выберете город отправки"
      />
      <ComboBox
        data={CITIES.map(({ region }) => ({ label: region }))}
        label="Выберете город доставки"
      />
      <TextField
        label="Вес посылки"
        id="outlined-start-adornment"
        sx={{ width: 200 }}
        InputProps={{
          startAdornment: <InputAdornment position="end">кг</InputAdornment>,
        }}
      />
      <TextField
        label="Ширина посылки"
        id="outlined-start-adornment"
        sx={{ width: 200 }}
        InputProps={{
          startAdornment: <InputAdornment position="end">см</InputAdornment>,
        }}
      />
      <TextField
        label="Высота посылки"
        id="outlined-start-adornment"
        sx={{ width: 200 }}
        InputProps={{
          startAdornment: <InputAdornment position="end">см</InputAdornment>,
        }}
      />
      <TextField
        label="Длина посылки"
        // placeholder="Введите длину в см"
        id="outlined-start-adornment"
        sx={{ width: 200 }}
        InputProps={{
          startAdornment: <InputAdornment position="end">см</InputAdornment>,
        }}
      />
      <Button>Рассчитать</Button>
    </Container>
  );
}

export default Calculator;
