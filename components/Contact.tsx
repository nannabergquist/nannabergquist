import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import SocialIcons from "../components/SocialIcons";

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: "#F4F4F4", margin: "0" }}>
      <Stack
        sx={{ backgroundColor: "rgb(244, 244, 244);", paddingLeft: "30px" }}
      >
        <Typography variant="h5">Nanna Bergquist</Typography>
        <Typography sx={{ color: "#1FA1FF" }}>
          bergquistnanna@gmail.com
        </Typography>
        <SocialIcons />
      </Stack>
    </Box>
  );
};
export default Contact;
