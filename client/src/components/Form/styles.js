import { theme } from "../../styles";

export const styles = {
  root: {
    "& .MuiTextField-root": {
      margin: 2,
    },
  },
  typography: {
    color: theme.palette.primary.dark,
    fontWeight: "bold",
    textAlign: "center",
  },
  textField: {
    marginTop: 1,
    "& label.Mui-focused": {
      color: theme.palette.primary.medium,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.medium,
      },
    },
  },

  paper: {
    padding: 2,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 1,
    backgroundColor: theme.palette.secondary.medium,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.medium,
      fontWeight: "bold",
    },
  },
  buttonClear: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.medium,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.secondary.medium,
      color: theme.palette.primary.main,
    },
  },
  input: {
    fontSize: 18,
  },
};
