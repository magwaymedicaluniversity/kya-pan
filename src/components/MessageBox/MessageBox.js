import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

import RubikGemstones from "../../photos//RubikGemstones-Regular.ttf";
import Button from "../Button/Button";
import Qr from "../../photos/qr-code.png";

const theme = createTheme({
  typography: {
    fontFamily: "RubikGemstones, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'RubikGemstones';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('RubikGemstones'), local('RubikGemstones-Regular'), url(${RubikGemstones}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const MessageBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: "3px solid #7b2cbf",
          background: "#fafafa",
          padding: "10px",
          borderRadius: "20px",
          margin: "20% 0",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bolder"
          sx={{
            fontFamily: "RubikGemstones",
            color: "#7b2cbf",
            marginBottom: "20px",
          }}
        >
          ၂၇.၁၀.၂၀၂၃
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#7b2cbf",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          ကျပန်းစကားပြောပြိုင်ပွဲမှာပါဝင်တဲ့သူငယ်ချင်းတွေကိုအတူတူအားပေးလိုက်ကြရအောင်။
        </Typography>
      </Box>
      <Button />
      <Box>
        <img src={Qr} alt="Qrcode" style={{ width: "100%" }} />
      </Box>
    </ThemeProvider>
  );
};

export default MessageBox;
