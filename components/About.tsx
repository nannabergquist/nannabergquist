import { Box, Button, Typography, Stack, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import WaveBackground from "../components/WaveBackground";

const About: React.FC = () => {
  const openPDFLink = () => {
    window.open(
      "https://drive.google.com/file/d/18PoSrVhh6CE71TvWTyXeTCc2OoQwugmK/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",
        backgroundColor: "rgb(244, 244, 244)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: { xs: "center", md: "center" },
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "300px", md: "300px" },
            height: { xs: "300px", md: "300px" },
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/nanna.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Sunflower"
          />
        </Box>
        <Box sx={{ maxWidth: "500px" }}>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Nanna Bergquist
          </Typography>
          <Typography sx={{ color: "#1FA1FF", paddingBottom: "20px" }}>
            Junior frontend developer
          </Typography>
          <Typography>
            Jag är en frontend utvecklare som är stationerat i Göteborg. Innan
            studerade jag Digitala medier på University West, Trollhättan. Under
            en kurs "webbutveckling" så väcktes mitt intresse för it fram och
            jag valde då att byta linje till frontend utvecklare. Anledning till
            att valet föll på frontend var för att jag brinner för design och
            att få utveckla en applikation som är användarvänlig tycker jag är
            väldigt roligt.
          </Typography>
          <Button
            variant="contained"
            sx={{ color: "white", marginTop: "20px" }}
            onClick={() => {
              openPDFLink();
            }}
          >
            mitt CV
          </Button>
        </Box>
      </Stack>
      <WaveBackground />
    </Box>
  );
};

export default About;
