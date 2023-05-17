import { Grid, Typography } from "@mui/material";

const DescriptionSection = () => {
  return (
    <>
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={10}>
          <Typography fontSize={40} textAlign="center" fontWeight={600}>
            Embodying Pope John Paul II in Cryptocurrency
          </Typography>
          <Typography fontSize={25} textAlign="justify" fontWeight={300} my={3}>
            Experience the essence of Pope John Paul II with JP2Coin, a
            revolutionary cryptocurrency. Inspired by his teachings, JP2Coin
            promotes compassion, unity, and empowerment. Enjoy secure
            transactions and a community-driven ecosystem.
          </Typography>
          <Typography fontSize={25} textAlign="center" fontWeight={600}>
            JP2 Coin - where faith meets innovation
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DescriptionSection;
