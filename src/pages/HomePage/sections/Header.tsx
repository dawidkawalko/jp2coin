import { Box, Grid, Typography } from "@mui/material";
import { FloatingBox } from "../../../components/FloatingBox";

const HeaderSection = () => {
  return (
    <>
      <Grid item xs={8} mt={20} mb={10}>
        <Typography fontSize={60} fontWeight={500}>
          The future of Faith
        </Typography>
        <Typography pl={5} mt={-3} fontSize={40} fontWeight={300}>
          . . . is in your hands
        </Typography>
      </Grid>
      <Grid item xs={4} mt={15} textAlign="center">
        <FloatingBox durationMs={3500}>
          <Box
            component="img"
            alt="Coin"
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pXzNi-vVALOVUNO1vmxu2ZaNdCNB97brn3sQ2zU6bA1KHbm95CAlyMlrcptr5BuN0zThcUNOxu-HeCE6wnEFQyo-kJfA=s1600"
            height={"200px"}
          />
        </FloatingBox>
      </Grid>
    </>
  );
};

export default HeaderSection;
