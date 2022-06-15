export type ColorTheme = {
  [type: string]: {
    [attr: string]: string;
  };
};

export const theme: ColorTheme = {
  primary: {
    color: "#fff",
    background: "#aa58ec",
  },
  secondary: {
    color: "#fff",
    background: "#38ffcb",
  },
  info: {
    color: "#fff",
    background: "#588aec",
  },
  success: {
    color: "#fff",
    background: "#58ec93",
  },
  danger: {
    color: "#fff",
    background: "#ec587d",
  },
  warning: {
    color: "#fff",
    background: "#ecd358",
  },
  dark: {
    color: "#fff",
    background: "#000",
  },
  white: {
    color: "#000",
    background: "#fff",
  },
  gray: {
    color: "#000",
    background: "#d9d9d9",
  },
  ghost: {
    color: "#000",
    background: "#d9d9d900",
  },
};

export type Theme = typeof theme;
