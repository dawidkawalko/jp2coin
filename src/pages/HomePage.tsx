import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import TopBar from "../components/TopBar";
import Pulse from "../components/Pulse";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} mt={20}>
            <Typography fontSize={60} fontWeight={500}>
              The future of Faith
            </Typography>
            <Typography pl={5} mt={-3} fontSize={40} fontWeight={300}>
              . . . is in your hands
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={15}
            display="flex"
            justifyContent="center"
          >
            <Pulse durationMs={3500}>
              <Box
                component="img"
                alt="Cream pie"
                src="https://data4.cupsell.pl/upload/generator/247026/640x420/4842640_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235"
                height={"200px"}
              />
            </Pulse>
          </Grid>
          <Grid item xs={12} mt={10}>
            <Paper elevation={1}>
              <Box display="flex" justifyContent="space-around" p={5}>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    200k+
                  </Typography>
                  <Typography>Cream pies sold</Typography>
                </div>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    100+
                  </Typography>
                  <Typography>Children molested</Typography>
                </div>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    1
                  </Typography>
                  <Typography>Parents notified</Typography>
                </div>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    0
                  </Typography>
                  <Typography>Court cases</Typography>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3} mt={12}></Grid>
          <Grid item xs={6} mt={12}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Typography fontSize={40} textAlign="center" fontWeight={600}>
                Embodying Pope John Paul II in Cryptocurrency
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} mt={12}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                Experience the essence of Pope John Paul II with "JP2 Coin," a
                revolutionary cryptocurrency. Inspired by his teachings, JP2
                Coin promotes compassion, unity, and empowerment. Enjoy secure
                transactions and a community-driven ecosystem. JP2 Coin: where
                values meet innovation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
