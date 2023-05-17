import { Box, Grid, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <>
      <Box className="anchor" id="contact"></Box>
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={10}>
          <Typography
            fontSize={{ xs: 30, md: 40 }}
            textAlign="center"
            fontWeight={600}
          >
            Contact
          </Typography>
          <Typography fontSize={{ xs: 20, md: 25 }} textAlign="center">
            <strong>Support: </strong> contact@jp2coin.com
          </Typography>
          <Typography fontSize={{ xs: 20, md: 25 }} textAlign="center">
            <strong>Cooperation:</strong> business@jp2coin.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactSection;
