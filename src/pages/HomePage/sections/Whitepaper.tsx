import { Box, Grid, Typography } from "@mui/material";

const WhitepaperSection = () => {
  return (
    <>
      <Box className="anchor" id="whitepaper"></Box>
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={10}>
          <Typography
            fontSize={{ xs: 30, md: 40 }}
            textAlign="center"
            fontWeight={700}
          >
            Whitepaper
          </Typography>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="justify"
            fontWeight={300}
            my={3}
          >
            JP2Coin is a cryptocurrency project created on the Ethereum network
            as an ERC-20 token, with the primary objective of restoring faith in
            modern society by promoting knowledge about the pontificate of Saint
            Pope John Paul II and other prominent Christian Saints. The
            selection of a cryptocurrency as a means of achieving this objective
            stems from our desire to offer a fair-trade method of payment for
            NFT resources that will showcase Saints and significant events from
            the history of Christianity. By doing so, we aim to demonstrate to
            the online community that faith holds intrinsic value, and our
            commitment to this cause is genuine.
          </Typography>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="justify"
            fontWeight={300}
            mb={3}
          >
            JP2Coin is designed as a burnable token, meaning that its supply
            will decrease over time. This feature makes it an ideal investment
            opportunity for long-term investors. In alignment with the mission
            of the Christian Church to provide charitable assistance, half of
            the transaction fees will be allocated to support select foundations
            dedicated to addressing social inequalities.
          </Typography>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="justify"
            fontWeight={300}
            mb={3}
          >
            The initial phase of the project focuses on raising awareness of
            JP2Coin and attracting investors. Subsequently, we plan to establish
            a Christian NFT marketplace where JP2Coin can be exchanged. Finally,
            we intend to foster faith by utilizing cutting-edge WEB3 solutions
            to narrate the greatest story of all time.
          </Typography>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="justify"
            fontWeight={300}
            mb={3}
          >
            The inspiration for this entire project arises from contemporary
            events that have contributed to a crisis of faith. Numerous voices
            seek to tarnish the esteemed reputation of Saint John Paul II and
            his pontificate. Our objective is to counteract this trend and
            create a new platform capable of reaching young people, thereby
            restoring faith and making a positive impact on the world.
          </Typography>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="justify"
            fontWeight={300}
          >
            The total coin supply has been set at 2,137,000,000,000 coins,
            symbolically referencing the hour of Saint John Paul II's death.
            This choice serves to emphasize that his pontificate did not
            conclude with his passing but marks the beginning of a new era. His
            legacy shall remain indelible, and we will collectively uphold the
            values he conveyed to the world through the employment of modern
            solutions. Join us today and become a part of this transformative
            project!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default WhitepaperSection;
