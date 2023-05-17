import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import "./FloatingBox.css";

interface FloatingBoxProps extends PropsWithChildren {
  durationMs?: number;
}

const FloatingBox = ({ durationMs = 1000, children }: FloatingBoxProps) => {
  return (
    <Box
      sx={{
        animation: `float ${durationMs}ms infinite`,
      }}
    >
      {children}
    </Box>
  );
};

export default FloatingBox;
