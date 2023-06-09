import { Box, Grid, Typography } from "@mui/material";

const NftSection = () => {
  return (
    <>
      <Box className="anchor" id="nft"></Box>
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={10}>
          <Typography
            fontSize={{ xs: 30, md: 40 }}
            textAlign="center"
            fontWeight={700}
          >
            NFT
          </Typography>
          <Typography fontSize={{ xs: 20, md: 25 }} textAlign="center">
            In preparation...
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NftSection;
