import { SxProps } from "@mui/system";

declare module "@mui/material" {
  interface AppBarProps {
    sx?: SxProps;
  }
}
