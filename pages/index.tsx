import {
  Box,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
import theme from "../styles/theme";
import { Link } from "react-scroll";
import { useActiveSection } from "../contexts/ActiveSectionContext";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Education from "../components/Education";
import Contact from "../components/Contact";
import React from "react";
import Image from "next/image";

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

function HomePage() {
  const activeSection = useActiveSection();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar sx={{ backgroundColor: "#F4F4F4" }} elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Image
                src="/images/signature.png"
                width={120}
                height={25}
                alt="nannabergquist"
              />
            </Link>

            <Box sx={{ display: "flex" }}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{
                  color: activeSection === "about" ? "#F30E0E" : "#4D4D4D",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                  borderBottom:
                    activeSection === "about" ? "2px solid #F30E0E" : "none",
                }}
              >
                Om
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{
                  color: "#4D4D4D",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Kompetens
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{
                  color: "#4D4D4D",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Utbildning
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                style={{
                  color: "#4D4D4D",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Kontakt
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Hero />
        <Skills />
        <About />
        <Education />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
