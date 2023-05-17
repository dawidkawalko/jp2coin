import { Box, Grid, Paper, Typography } from "@mui/material";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <Grid item xs={12}>
      <Box
        component={Paper}
        elevation={5}
        display="flex"
        justifyContent="space-around"
        py={5}
        mt={{ xs: 5 }}
        sx={{
          borderRadius: 3,
          ":hover": {
            boxShadow: 10,
          },
        }}
      >
        <Box>
          <Typography fontSize={{ xs: 40, md: 50 }} fontWeight={700}>
            <CountUp end={2137} duration={3} />B
          </Typography>
          <Typography fontSize={{ xs: 15, md: 20 }}>Total supply</Typography>
        </Box>
        <Box>
          <Typography fontSize={{ xs: 40, md: 50 }} fontWeight={700}>
            <CountUp end={92} duration={5} />%
          </Typography>
          <Typography fontSize={{ xs: 15, md: 20 }}>Liquidity</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default StatsSection;
