import { Box, Grid, Typography } from "@mui/material";
import { Section } from "../../../components/Section";
import { Uniswap } from "../../../components/Uniswap";

const StepsSection = () => {
  return (
    <>
      <Box className="anchor" id="getyourcoin"></Box>
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={10}>
          <Typography
            fontSize={{ xs: 30, md: 40 }}
            textAlign="center"
            fontWeight={600}
          >
            Get your JP2Coin in three simple steps
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} mb={5}>
        <Section title="Step 1: Install MetaMask">
          Go to{" "}
          <a
            className="styled"
            href="https://metamask.io/"
            target="_blank"
            rel="noreferrer"
          >
            metamask.io
          </a>{" "}
          and install the MetaMask extension for your browser. <br />
          Set up your wallet following the provided instructions.
        </Section>
        <Section title="Step 2: Fund your wallet">
          Connect your wallet to the Ethereum mainnet. <br />
          Buy ETH from a trusted exchange or peer-to-peer platform.
        </Section>

        <Section title="Step 3: Swap for JP2">
          Go to{" "}
          <a
            className="styled"
            href="https://app.uniswap.org/"
            target="_blank"
            rel="noreferrer"
          >
            app.uniswap.org
          </a>{" "}
          and connect your MetaMask wallet.
          <br />
          Swap ETH for JP2 and wait for the transaction to complete.
        </Section>
        <Uniswap />
      </Grid>
    </>
  );
};

export default StepsSection;
