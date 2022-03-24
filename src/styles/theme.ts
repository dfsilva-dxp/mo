export default {
  grid: {
    container: "148rem",
    gutter: "2.2rem"
  },
  border: {
    radius: "0.4rem"
  },
  font: {
    family: {
      default:
        "Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      heading:
        "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "2.4rem",
      xlarge: "3.6rem",
      xxlarge: "4.8rem"
    }
  },
  colors: {
    primary: "#FFC727",
    background: "#181B23",
    panel: "#1F2029",
    green: "#3CD3C1",
    red: "#E83F5B",
    orange: "#FF5C00",
    pink: "#D53F8C",
    gray100: "#B3B5C6",
    gray400: "#797D9A",
    gray500: "#616480",
    gray750: "#404152",
    black: "#030517",
    white: "#FAFAFA"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem"
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out"
  }
} as const;
