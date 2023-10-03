import { Box } from "@mui/material";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <Box sx={{ padding: "30px", display: "flex", gap: "10px" }}>
      <a href="https://github.com/nannabergquist">
        <Image src="/images/github.png" width={30} height={30} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/nannabergquist">
        <Image
          src="/images/linkedin.png"
          width={30}
          height={30}
          alt="LinkedIn"
        />
      </a>
    </Box>
  );
};

export default SocialIcons;
