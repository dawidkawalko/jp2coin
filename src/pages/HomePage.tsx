import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import TopBar from "../components/TopBar";
import Pulse from "../components/Pulse";
import CountUp from "react-countup";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Container maxWidth="lg">
        <Grid container spacing={0}>
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
                src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pXzNi-vVALOVUNO1vmxu2ZaNdCNB97brn3sQ2zU6bA1KHbm95CAlyMlrcptr5BuN0zThcUNOxu-HeCE6wnEFQyo-kJfA=s1600"
                height={"200px"}
              />
            </Pulse>
          </Grid>

          <Grid item xs={12} mt={10} className="stats">
            <Paper
              elevation={1}
              sx={{ backgroundColor: "rgba(50, 50, 50, 0.1)" }}
            >
              <Box display="flex" justifyContent="space-around" p={5}>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    <CountUp end={2137000000000} duration={3} />
                  </Typography>
                  <Typography fontSize={20}>Total supply</Typography>
                </div>
                <div>
                  <Typography fontSize={50} fontWeight={500}>
                    <CountUp end={92} duration={5} />%
                  </Typography>
                  <Typography fontSize={20}>Liquidity</Typography>
                </div>
              </Box>
            </Paper>
          </Grid>

          <Grid item container justifyContent="center" mt={10}>
            <Grid item xs={10}>
              <Typography fontSize={40} textAlign="center" fontWeight={600}>
                Embodying Pope John Paul II in Cryptocurrency
              </Typography>
            </Grid>
          </Grid>

          <Grid item container justifyContent="center" mt={3}>
            <Grid item xs={10}>
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                Experience the essence of Pope John Paul II with "JP2 Coin," a
                revolutionary cryptocurrency. Inspired by his teachings, JP2
                Coin promotes compassion, unity, and empowerment. Enjoy secure
                transactions and a community-driven ecosystem.
              </Typography>
              <Typography fontSize={27} textAlign="center" fontWeight={600}>
                JP2 Coin - where faith meets innovation
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} mt={10}>
            <Divider />
          </Grid>

          <Grid item container justifyContent="space-between" mt={5}>
            <Grid item xs={4}>
              <Typography
                fontSize={25}
                textAlign="left"
                fontWeight={300}
                color="grey"
              >
                <i>"Revolutionary" ~Somebody</i>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                fontSize={25}
                textAlign="center"
                fontWeight={300}
                color="grey"
              >
                <i>"Truly remarkable" ~TVP</i>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                fontSize={25}
                textAlign="right"
                fontWeight={300}
                color="grey"
              >
                <i>"Ahead of its time" ~Anonymous</i>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Typography
              fontSize={25}
              textAlign="center"
              fontWeight={300}
              color="grey"
            >
              <i>
                "I am glad that I bought so many JP2 tokens today" ~Crypto
                investor
              </i>
            </Typography>
          </Grid> */}
        </Grid>

        <Grid item xs={12} mt={5}>
          <Divider />
        </Grid>

        <Grid item container justifyContent="center" mt={5}>
          <Grid item xs={10}>
            <Typography fontSize={40} textAlign="center" fontWeight={600}>
              Get your JP2Coin in three simple steps
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={5} className="stats">
          <Box
            component={Paper}
            elevation={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            p={5}
            mb={3}
          >
            <div>
              <Typography fontSize={40} fontWeight={500}>
                Step 1: Install MetaMask
              </Typography>
            </div>
            <div>
              <Typography fontSize={30}>
                Go to{" "}
                <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                  metamask.io
                </a>{" "}
                and install the MetaMask extension for your browser. <br />
                Set up your wallet following the provided instructions.
              </Typography>
            </div>
          </Box>
          <Box
            component={Paper}
            elevation={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            p={5}
            mb={3}
          >
            <div>
              <Typography fontSize={40} fontWeight={500}>
                Step 2: Fund your wallet
              </Typography>
            </div>
            <div>
              <Typography fontSize={30}>
                Connect your wallet to the Ethereum mainnet. <br />
                Buy ETH from a trusted exchange or peer-to-peer platform, such
                as:
              </Typography>
            </div>
          </Box>
          <Box
            component={Paper}
            elevation={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            p={5}
            mb={3}
          >
            <div>
              <Typography fontSize={40} fontWeight={500}>
                Step 3: Swap for JP2
              </Typography>
            </div>
            <div>
              <Typography fontSize={30}>
                Go to{" "}
                <a
                  href="https://app.uniswap.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  app.uniswap.org
                </a>{" "}
                and connect your MetaMask wallet.
                <br />
                Swap ETH for JP2 and wait for the transaction to complete.
              </Typography>
            </div>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            py={5}
            mb={3}
          >
            <div>
              <Box
                component="iframe"
                title="uniswap"
                src="https://app.uniswap.org/#/swap?outputCurrency=0x5349874977eBD48810008567ada7Dbbf0f401b94"
                height="660px"
                width="100%"
                sx={{ border: 0 }}
              />
            </div>
          </Box>
          <Grid item xs={12} mt={5}>
            <Divider />
          </Grid>

          <Grid item container justifyContent="center" mt={5}>
            <Grid item xs={10}>
              <Typography fontSize={40} textAlign="center" fontWeight={600}>
                Contact
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
