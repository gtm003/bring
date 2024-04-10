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
  Button,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { CITIES } from "./data/cities";
import ComboBox from "./components/ComboBox";
import Divider from "@mui/material/Divider";

const Container = styled(Paper)(() => ({
  background: "#fcfcfc",
  maxWidth: "1000px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "initial",
  gap: "16px",
  textAlign: "start",
}));

// type DeliveryType = "marketplace" | "common";

interface PriceProps {
  express: number;
  nonExpress: number;
}
const NON_NUMERIC_CHARTERS = /[a-zA-Z.,/]/g;
const removeNonNumericCharters = (value: string) =>
  value.replace(NON_NUMERIC_CHARTERS, "");

const getPrice = (
  deliveryType: string,
  from: string | null,
  weight: number,
  height: number,
  width: number,
  lenght: number
) => {
  const volume = height * width * lenght;
  const volumeWeight = Math.ceil(volume / 5000); // Math.ceil - округляет вверх до целых
  const countedWeight = Math.max(weight, volumeWeight);

  if (deliveryType === "marketplace") {
    return {
      express: countedWeight * 20,
      nonExpress: countedWeight * 15,
    };
  } else {
    const { oneKg, price } =
      CITIES.find((location) => location.region === from) ?? CITIES[0];
    return {
      express: (countedWeight - 1) * price + oneKg + 2,
      nonExpress: (countedWeight - 1) * price + oneKg + 2, // Какая здесь формула?
    };
  }
};

function Calculator() {
  const [from, setFrom] = useState<string | null>("Владикавказ, Республика Северная Осетия - Алания, Россия");
  const [typeDelivery, setTypeDelivery] = useState("marketplace");
  const [weight, setWeight] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);
  const [width, setWidth] = useState<string | null>(null);
  const [lenght, setLenght] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState<PriceProps>({express: 0, nonExpress: 0});

  const handleTypeDeliveryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTypeDelivery((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value === "marketplace") {
      setFrom("Владикавказ, Республика Северная Осетия - Алания, Россия");
    } else {
      setFrom(null);
    }
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validatedValue = removeNonNumericCharters(
      (event.target as HTMLInputElement).value
    );
    console.log(validatedValue);
    setWeight(validatedValue);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validatedValue = removeNonNumericCharters(
      (event.target as HTMLInputElement).value
    );
    setHeight(validatedValue);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validatedValue = removeNonNumericCharters(
      (event.target as HTMLInputElement).value
    );
    setWidth(validatedValue);
  };

  const handleLenghtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validatedValue = removeNonNumericCharters(
      (event.target as HTMLInputElement).value
    );
    setLenght(validatedValue);
  };

  const handleButtonCalculate = () => {
    console.log(weight);
    if (weight) {
      setIsChecked(true);
      setIsValid(true);
      setPrice(
        getPrice(
          typeDelivery,
          from,
          Number(weight),
          Number(width),
          Number(height),
          Number(lenght)
        )
      );
      return;
    }
    setIsValid(false);
  };

  // console.log(`isValid: ${isValid}`);
  // console.log(`isChecked: ${isChecked}`);
  console.log(typeDelivery);
  console.log(typeDelivery === "marketplace");

  return (
    <Container elevation={5}>
      <Typography variant="h2">Параметры доставки</Typography>
      <FormControl sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <FormLabel id="demo-radio-buttons-group-label">
          Выберете тип доставки:{" "}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={typeDelivery}
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row" }}
          onChange={handleTypeDeliveryChange}
        >
          <FormControlLabel
            value="marketplace"
            control={<Radio />}
            label="маркетплейс"
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
        label="Выберете город отправки / доставки"
        onChange={(value) => setFrom(value)}
        disabled={typeDelivery === "marketplace"}
        value={from}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
        }}
        component="form"
        autoComplete="off"
      >
        <TextField
          error={!isValid && !weight}
          label="Вес посылки, кг"
          id="outlined-start-adornment"
          onChange={handleWeightChange}
          value={weight}
        />
        <TextField
          error={!isValid && !width}
          label="Ширина посылки, см"
          id="outlined-start-adornment"
          onChange={handleWidthChange}
        />
        <TextField
          error={!isValid && !height}
          label="Высота посылки, см"
          id="outlined-start-adornment"
          onChange={handleHeightChange}
        />
        <TextField
          error={!isValid && !lenght}
          label="Длина посылки, см"
          id="outlined-start-adornment"
          onChange={handleLenghtChange}
        />
      </Box>
      {!isValid && (
        <Alert severity="error">
          Для выполнения расчета все поля должны быть заполнены
        </Alert>
      )}
      <Button onClick={handleButtonCalculate}>Рассчитать</Button>
      <Box
        sx={{
          display: isChecked ? "flex" : "none",
          flexDirection: "row",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "space-between",
            width: "50%",
            padding: "0 16px",
          }}
        >
          <Box>
            <Typography variant="h2">Тариф "Экспресс":</Typography>
            <Typography variant="body1">
              &#x2022; только для частных лиц
            </Typography>
            <Typography variant="body1">
              &#x2022; не принимаем к отправке крупногабарит и коммерческие
              грузы
            </Typography>
            <Typography variant="body1">&#x2022; срок 5-12 дней</Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{ textAlign: "end" }}
          >{`Цена: ${price.express} лари`}</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "space-between",
            width: "50%",
            padding: "0 16px",
          }}
        >
          <Box>
            <Typography variant="h2">
              {typeDelivery === "marketplace"
                ? `Тариф "Эконом"`
                : `Тариф "Коммерческий"`}
              :
            </Typography>
            <Typography variant="body1">
              &#x2022; для всех видов отправлений:
            </Typography>
            <Typography variant="body1">&#x2022; срок 15-25 дней</Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "end" }}
          >{`Цена: ${price.nonExpress} лари`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Calculator;
