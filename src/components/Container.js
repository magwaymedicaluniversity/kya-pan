import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Typography } from "@mui/material";
import School from "../photos/ummg-log.png";
import MessageBox from "./MessageBox/MessageBox";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
          paddingLeft: "10px",
          paddingRight: "10px",
          textAlign: "center",
          color: "#7b2cbf",
          fontWeight: "bold",
        }}
      >
        University Of Medicine , Magway
      </Typography>
      <CssBaseline />
      <Container maxWidth="sm">
        <MessageBox />
        <img
          src={School}
          alt="School"
          style={{ width: "100%", height: "100%" }}
        />
      </Container>
    </React.Fragment>
  );
}
