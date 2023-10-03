import React, { useEffect, useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import Image from "next/image";

interface NavigationProps {
  isMobile: boolean;
  page: string;
  getRefFromSectionId: (
    sectionId: string
  ) => React.RefObject<HTMLElement> | null;
}

const Navigation: React.FC<NavigationProps> = ({
  isMobile,
  page,
  getRefFromSectionId,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [isTop, setIsTop] = useState(true);
  const introductionRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (sectionId: string) => {
    setMenuAnchor(null);
    const sectionRef = getRefFromSectionId(sectionId);
    if (sectionRef && sectionRef.current) {
      // Check for null and current
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={isTop ? "static" : "fixed"} // Set the position based on whether user scrolled
      sx={{
        backgroundColor: "white",
        zIndex: 1000, // Make sure it appears above other content
      }}
    >
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
          {isMobile ? (
            <IconButton
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MenuIcon sx={{ color: "#FFBE41" }} />
            </IconButton>
          ) : (
            <>
              <Link href="#about">
                <a style={{ color: "#FFBE41", textDecoration: "none" }}>Om</a>
              </Link>
              <Link href="#skills">
                <a style={{ color: "#FFBE41", textDecoration: "none" }}>
                  Kompetens
                </a>
              </Link>
              <Link href="#education">
                <a style={{ color: "#FFBE41", textDecoration: "none" }}>
                  Utbildning
                </a>
              </Link>

              <Link href="#contact">
                <a style={{ color: "#FFBE41", textDecoration: "none" }}>
                  Kontakt
                </a>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
      <Menu
        id="mobile-menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ display: isMobile ? "none" : "block" }}
      >
        <MenuItem onClick={() => handleMenuClose("about")}>
          <span style={{ color: "#FFBE41", textDecoration: "none" }}>Om</span>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("skills")}>
          <span style={{ color: "#FFBE41", textDecoration: "none" }}>
            Kompetens
          </span>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("school")}>
          <span style={{ color: "#FFBE41", textDecoration: "none" }}>
            Utbildning
          </span>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("contact")}>
          <span style={{ color: "#FFBE41", textDecoration: "none" }}>
            Kontakt
          </span>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navigation;
function getRefFromSectionId(sectionId: string) {
  throw new Error("Function not implemented.");
}
