import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

interface NavbarProps {
  sx?: {
    position?: string;
    top?: number;
    left?: number;
    right?: number;
    zIndex?: number;
  };
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" color="#FFBE41">
            nannabergquist
          </Typography>
          <Image
            src="/images/sunflower1.png"
            width={25}
            height={25}
            alt="Sunflower"
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <>
            <Link>
              <span
                style={{
                  color: "#FFBE41",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Om
              </span>
            </Link>
            <Link>
              <span
                style={{
                  color: "#FFBE41",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Kompetens
              </span>
            </Link>
            <Link>
              <span
                style={{
                  color: "#FFBE41",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Utbildning
              </span>
            </Link>
            <Link>
              <span
                style={{
                  color: "#FFBE41",
                  textDecoration: "none",
                  display: "block",
                  marginRight: "10px",
                }}
              >
                Kontakt
              </span>
            </Link>
          </>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
