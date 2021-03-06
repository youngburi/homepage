import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  custom: {
    lightbg: "#eee",
    yellow: "yellow",
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("custom.lightbg", "#353535")(props),
      color: mode("black", "gray.100")(props),
    },
    _selection: {
      color: mode("rgba(240, 240, 240, 0.99)", "rgba(0, 0, 0, 0.99)")(props),
      bg: mode("rgba(0, 0, 0, 0.99)", "rgba(240, 240, 240, 0.99)")(props),
    },
  }),
};

const fonts = {
  raleway: "'Raleway', sans-serif",
  japanese: "'Noto Sans JP'",
  japaneseSerif: "'Noto Serif JP'",
  heading: "'Heebo', sans-serif",
  body: "'Heebo', sans-serif",
  singleDay: "'Single Day'",
  shippori: "'Shippori Mincho', serif",
  courierPrime: "'Courier Prime'",
};

export const theme = extendTheme({ colors, fonts, styles });
