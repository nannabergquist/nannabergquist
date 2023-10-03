import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import WaveBackgroundBottom from "../components/WaveBackgroundBottom";

const educationsData = [
  {
    title: "Frontend utvecklare",
    subheading: "NBI/Handelsakademin",
    year: "2021-2023",
    imageUrl: "/images/ux.png",
  },
  {
    title: "Digitala medier",
    subheading: "University West",
    year: "2019-2021",
    imageUrl: "/images/social.png",
  },
  {
    title: "Handelsprogrammet",
    subheading: "Elof lindälvsgymnasium",
    year: "2013-2016",
    imageUrl: "/images/school.png",
  },
  {
    title: "Fotbollsledare",
    subheading: "Lindome GIF",
    year: "2011",
    imageUrl: "/images/soccer-ball.png",
  },
];

const Education: React.FC = () => {
  return (
    <Box
      id="education"
      sx={{
        backgroundImage: `linear-gradient(180deg, rgba(31,161,255), rgba(0,41,255))`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          textAlign: "center",
          color: "#FFBE41",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "45px",
        }}
      >
        Utbildning
      </Typography>
      <Box>
        {educationsData.map((education, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", md: "row" }}
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: "20px",
              padding: "20px",
            }}
          >
            <img
              src={education.imageUrl}
              alt={education.title}
              width={90}
              height={90}
              style={{ marginBottom: "5px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Typography variant="h6" style={{ color: "white" }}>
                {education.title}
              </Typography>
              <Typography color="primary" style={{ fontWeight: "600" }}>
                {education.subheading}
              </Typography>
              <Typography color="primary" style={{ fontWeight: "600" }}>
                {education.year}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Box>
      <WaveBackgroundBottom />
    </Box>
  );
};

export default Education;
