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
  WhitepaperSection,
} from "./sections";
import { GridDivider } from "../../components/GridDivider";
import LazyLoad from "../../components/LazyLoad";

const HomePage = () => {
  return (
    <Container>
      <Grid container>
        <HeaderSection />
        <StatsSection />
        <DescriptionSection />
        <GridDivider />

        <StepsSection />
        <GridDivider />

        <WhitepaperSection />
        <GridDivider />

        <NftSection />
        <GridDivider />

        <LazyLoad />
        <ContactSection />
        <FooterSection />
      </Grid>
    </Container>
  );
};

export default HomePage;
