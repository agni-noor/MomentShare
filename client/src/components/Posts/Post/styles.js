import { theme } from "../../../styles";

export const styles = {
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    // marginLeft: "20px",
    // marginTop: "10px",
    top: "20px",
    left: "20px",
    color: "#FFFFFF",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: theme.palette.secondary.duskydark,
  },
  title: {
    padding: "0 16px",
    color: theme.palette.secondary.medium,
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: theme.palette.primary.medium,
  },
};
