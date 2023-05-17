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
        sx={{
          ":hover": {
            boxShadow: 10,
          },
        }}
      >
        <Box>
          <Typography fontSize={50} fontWeight={500}>
            <CountUp end={2137000000000} duration={3} />
          </Typography>
          <Typography fontSize={20}>Total supply</Typography>
        </Box>
        <Box>
          <Typography fontSize={50} fontWeight={500}>
            <CountUp end={92} duration={5} />%
          </Typography>
          <Typography fontSize={20}>Liquidity</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default StatsSection;
