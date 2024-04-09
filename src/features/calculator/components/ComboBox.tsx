import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

interface OptionProps {
  label: string;
}

interface ComboBoxProps {
  data: Array<OptionProps>;
  label: string;
  onChange: (value: string | null) => void;
  value: string | null; //'Владикавказ, Республика Северная Осетия - Алания, Россия',
  disabled: boolean;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  data,
  label,
  onChange,
  value,
  disabled,
}) => {
  // const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  // console.log(`value: ${value}`);
  // console.log(`inputValue: ${inputValue}`);
  const onChangeComboBox = (newInputValue: string | null) => {
    // setInputValue(newInputValue);
    onChange(newInputValue);
  };
  return (
    <Autocomplete
      //disabled
      disabled={disabled}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        onChangeComboBox(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      disablePortal
      id="combo-box-demo"
      options={data.map((item) => item.label)}
      renderInput={(params) => <TextField {...params} label={label} />}
      // onChange={() => console.log("test")}
    />
  );
};

export default ComboBox;
