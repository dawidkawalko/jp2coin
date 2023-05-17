import { Grid, Typography } from "@mui/material";

const FooterSection = () => {
  return (
    <Grid item container justifyContent="center" my={1}>
      <Grid item xs={10}>
        <Typography fontSize={15} textAlign="center" fontWeight={300}>
          Copyright © 2023 JP2Coin Team <br />
          All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
