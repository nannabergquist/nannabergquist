import { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

const interestsList = [
  "React",
  "Typescript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node",
  "Express",
  "React Native",
  "Nextjs",
  "Tailwind",
  "Material UI",
  "Figma",
];

const Hero = () => {
  const [interestIndex, setInterestIndex] = useState(0);
  const [interest, setInterest] = useState(interestsList[interestIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setInterestIndex((prevIndex) => (prevIndex + 1) % interestsList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInterest(interestsList[interestIndex]);
  }, [interestIndex]);

  return (
    <Box id="hero" sx={{ backgroundColor: "#F4F4F4" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "80px 20px", md: "140px " },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              marginBottom: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "24px", md: "36px" },
                fontWeight: "700",
              }}
            >
              Hej, mitt namn är
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                fontSize: { xs: "24px", md: "36px" },
                fontWeight: "700",
              }}
            >
              Nanna
            </Typography>
            <TypingEffect interests={interestsList} />
          </Box>
          <Box
            sx={{
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/avatar.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Sunflower"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
