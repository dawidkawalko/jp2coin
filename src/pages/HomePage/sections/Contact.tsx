import { Grid, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Grid item container justifyContent="center" my={5}>
      <Grid item xs={10}>
        <Typography fontSize={40} textAlign="center" fontWeight={600}>
          Contact
        </Typography>
        <Typography fontSize={25} textAlign="center">
          <strong>Support: </strong> contact@jp2coin.com
        </Typography>
        <Typography fontSize={25} textAlign="center">
          <strong>Cooperation:</strong> business@jp2coin.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
