import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import "./Pulse.css";

interface PulseProps extends PropsWithChildren {
  durationMs?: number;
}

export default function Pulse({ durationMs = 400, children }: PulseProps) {
  return (
    <Box
      sx={{
        animation: `pulsee ${durationMs}ms infinite`,
      }}
    >
      {children}
    </Box>
  );
}
