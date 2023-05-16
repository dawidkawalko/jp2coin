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

          <Grid item container justifyContent="center" mt={5} mb={2}>
            <Grid item xs={10}>
              <Typography fontSize={40} textAlign="center" fontWeight={600}>
                Whitepaper
              </Typography>
            </Grid>
          </Grid>

          <Grid item container justifyContent="center" mt={3}>
            <Grid item xs={10}>
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                JP2Coin is a cryptocurrency project created on the Ethereum
                network as an ERC-20 token, with the primary objective of
                restoring faith in modern society by promoting knowledge about
                the pontificate of Saint Pope John Paul II and other prominent
                Christian Saints. The selection of a cryptocurrency as a means
                of achieving this objective stems from our desire to offer a
                fair-trade method of payment for NFT resources that will
                showcase Saints and significant events from the history of
                Christianity. By doing so, we aim to demonstrate to the online
                community that faith holds intrinsic value, and our commitment
                to this cause is genuine.
              </Typography>
              <br />
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                JP2Coin is designed as a burnable token, meaning that its supply
                will decrease over time. This feature makes it an ideal
                investment opportunity for long-term investors. In alignment
                with the mission of the Christian Church to provide charitable
                assistance, half of the transaction fees will be allocated to
                support select foundations dedicated to addressing social
                inequalities.
              </Typography>
              <br />
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                The initial phase of the project focuses on raising awareness of
                JP2Coin and attracting investors. Subsequently, we plan to
                establish a Christian NFT marketplace where JP2Coin can be
                exchanged. Finally, we intend to foster faith by utilizing
                cutting-edge WEB3 solutions to narrate the greatest story of all
                time.
              </Typography>
              <br />
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                The inspiration for this entire project arises from contemporary
                events that have contributed to a crisis of faith. Numerous
                voices seek to tarnish the esteemed reputation of Saint John
                Paul II and his pontificate. Our objective is to counteract this
                trend and create a new platform capable of reaching young
                people, thereby restoring faith and making a positive impact on
                the world.
              </Typography>
              <br />
              <Typography fontSize={25} textAlign="justify" fontWeight={300}>
                The total coin supply has been set at 2,137,000,000,000 coins,
                symbolically referencing the hour of Saint John Paul II's death.
                This choice serves to emphasize that his pontificate did not
                conclude with his passing but marks the beginning of a new era.
                His legacy shall remain indelible, and we will collectively
                uphold the values he conveyed to the world through the
                employment of modern solutions. Join us today and become a part
                of this transformative project!
              </Typography>
              <br />
            </Grid>
          </Grid>

          <Grid item xs={12} mt={5}>
            <Divider />
          </Grid>

          <Grid item container justifyContent="center" mt={5} mb={2}>
            <Grid item xs={10}>
              <Typography fontSize={40} textAlign="center" fontWeight={600}>
                NFT
              </Typography>
              <Typography fontSize={25} textAlign="center">
                In preparation...
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} mt={5}>
            <Divider />
          </Grid>

          <Grid item container justifyContent="center" mt={5} mb={2}>
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

          <Grid item container justifyContent="center" mt={3} mb={3}>
            <Grid item xs={10}>
              <Typography fontSize={15} textAlign="center" fontWeight={300}>
                Copyright © 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
