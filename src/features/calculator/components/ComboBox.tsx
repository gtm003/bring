import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface OptionProps {
  label: string;
}

interface ComboBoxProps {
  data: Array<OptionProps>;
  label: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ data, label }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 800 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default ComboBox;
