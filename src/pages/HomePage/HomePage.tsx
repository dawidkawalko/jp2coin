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

const HomePage = () => {
  return (
    <Container maxWidth="lg">
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

        <ContactSection />
        <FooterSection />
      </Grid>
    </Container>
  );
};

export default HomePage;
