import { Container, Grid } from "@mui/material";
import "./HomePage.css";
import {
  ContactSection,
  DescriptionSection,
  FooterSection,
  HeaderSection,
  NftSection,
  StatsSection,
  StepsSection,
  UniswapSection,
  WhitepaperSection,
} from "./sections";
import { GridDivider } from "../../components/GridDivider";

const HomePage = () => {
  return (
    <Container>
      <Grid container>
        <HeaderSection />
        <StatsSection />
        <DescriptionSection />
        <GridDivider />

        <StepsSection />
        <UniswapSection />
        <GridDivider />

        <WhitepaperSection />
        <GridDivider />

        <NftSection />
        <GridDivider />

        <ContactSection />
        <FooterSection />
      </Grid>
    </Container>
  );
};

export default HomePage;
