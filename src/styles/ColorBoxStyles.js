import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyBtn: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0,
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    height: "100%",
    width: "100%",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      width: "100%",
      padding: "1rem",
      fontWeight: "400",
      textAlign: "center",
      textShadow: "1px 2px black",
      textTransform: "uppercase",
      background: "rgba(255, 255, 255, 0.2)",
      [sizes.down("xs")]: {
        fontSize: "6rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};
