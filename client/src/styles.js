import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#5356FF",
      medium: "#378CE7",
      light: "#67C6E3",
      lightest: "#DFF5FF",
    },
    secondary: {
      main: "#9BBEC8",
      medium: "#121481",
      dark: "#0F1035",
      dusky: "#365486",
      duskydark: "#11235A",
    },
  },
});

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: theme.palette.primary.medium,
  },
  image: {
    marginLeft: "20px",
  },
};
