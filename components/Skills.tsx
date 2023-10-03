import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import WaveBackgroundBottom from "../components/WaveBackgroundBottom";

const skillsData = [
  { title: "Nextjs", imageUrl: "/images/nextjs.png" },
  { title: "HTML5", imageUrl: "/images/html.png" },
  { title: "Typescript", imageUrl: "/images/typescript.png" },
  { title: "React", imageUrl: "/images/react.png" },
  { title: "CSS", imageUrl: "/images/css.png" },
  { title: "Nodejs", imageUrl: "/images/nodejs.png" },
  { title: "JavaScript", imageUrl: "/images/javascript.png" },
  { title: "MaterialUI", imageUrl: "/images/materialui.png" },
  { title: "Figma", imageUrl: "/images/figma.png" },
  { title: "TailwindCSS", imageUrl: "/images/tailwindcss.png" },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
        backgroundImage: `linear-gradient(180deg, rgba(31,161,255), rgba(0,41,255))`,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          textAlign: "center",
          color: "#FFBE41",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          paddingTop: "30px",
          margin: "10px",
        }}
      >
        Skills & Tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.20)",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
          margin: "0px 100px",
        }}
      >
        <Grid container spacing={1} sx={{ marginTop: "20px" }}>
          {skillsData.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              sx={{ marginBottom: "20px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.title}
                  width={100}
                  height={90}
                  style={{ marginBottom: "5px" }}
                />
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  {skill.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <WaveBackgroundBottom />
    </Box>
  );
};

export default Skills;
