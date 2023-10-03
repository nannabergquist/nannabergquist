import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingEffect = ({ interests }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const typingSpeed = 450; // Adjust the value to control typing speed (in milliseconds)
  const deletingSpeed = 300; // Adjust the value to control deleting speed (in milliseconds)
  const pauseSpeed = 1000;

  useEffect(() => {
    let timeout;

    const currentInterest = interests[currentIndex];

    if (typedText !== currentInterest) {
      if (typedText.length < currentInterest.length) {
        // Typing
        setTypedText(currentInterest.slice(0, typedText.length + 1));
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
        }, typingSpeed);
      } else if (typedText.length === currentInterest.length) {
        // Pausing
        setShowCursor(false);
        timeout = setTimeout(() => {
          setShowCursor(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
        }, pauseSpeed);
      } else {
        // Deleting
        setTypedText(currentInterest.slice(0, typedText.length - 1));
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
        }, deletingSpeed);
      }
    } else {
      // Finished typing
      setShowCursor(true);
      timeout = setTimeout(() => {
        setShowCursor(false);
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
        }, 500);
      }, 1000);
    }

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, [typedText, currentIndex, interests]);

  useEffect(() => {
    setTypedText(interests[currentIndex].slice(0, 1));
  }, [currentIndex, interests]);

  return (
    <Typography variant="h5">
      Jag gillar{" "}
      <Typography
        variant="h5"
        component="span"
        color="blue"
        sx={{
          display: "inline-block",
          maxWidth: "max-content",
          transition: "color 0.3s ease-in-out",
          marginTop: "40px",
          color: "#1FA1FF",
        }}
      >
        {typedText}
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </Typography>
    </Typography>
  );
};

export default TypingEffect;
