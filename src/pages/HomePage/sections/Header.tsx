import { Box, Grid, Typography } from "@mui/material";
import { FloatingBox } from "../../../components/FloatingBox";

const HeaderSection = () => {
  return (
    <>
      <Grid
        item
        sm={8}
        xs={12}
        mt={{ xs: 5, sm: 10, md: 20 }}
        mb={{ xs: 5, md: 10 }}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Typography fontSize={{ xs: 40, md: 60 }} fontWeight={500}>
          The future of Faith
        </Typography>
        <Typography
          pl={5}
          mt={-3}
          fontSize={{ xs: 30, md: 40 }}
          fontWeight={300}
        >
          . . . is in your hands
        </Typography>
      </Grid>
      <Grid
        item
        sm={4}
        xs={12}
        mt={{ xs: 0, sm: 5, md: 15 }}
        textAlign="center"
      >
        <FloatingBox durationMs={3500}>
          <Box
            component="img"
            alt="Coin"
            src="/assets/coin_fullres.png"
            sx={{ height: { xs: "150px", sm: "200px" } }}
          />
        </FloatingBox>
      </Grid>
    </>
  );
};

export default HeaderSection;
