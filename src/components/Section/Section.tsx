import { Box, Paper, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title: string;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <Box
      component={Paper}
      elevation={5}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      p={5}
      mb={3}
      sx={{
        ":hover": {
          boxShadow: 10,
        },
      }}
    >
      <div>
        <Typography fontSize={40} fontWeight={500}>
          {title}
        </Typography>
      </div>
      <div>
        <Typography fontSize={30}>{children}</Typography>
      </div>
    </Box>
  );
};

export default Section;
