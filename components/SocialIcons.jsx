import { Box } from "@mui/material";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <Box sx={{ margin: "30px" }}>
      <Image
        src="/images/instagram.png"
        width={50}
        height={50}
        alt="Instagram"
      />
      <Image src="/images/github.png" width={50} height={50} alt="Github" />
      <Image src="/images/linkedin.png" width={50} height={50} alt="LinkedIn" />
    </Box>
  );
};

export default SocialIcons;
