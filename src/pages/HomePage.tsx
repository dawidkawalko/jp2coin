import { Grid, Paper, Slide, Typography, styled } from "@mui/material";
import TopBar from "../components/TopBar";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <TopBar />

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography
            variant="h2"
            align="center"
            sx={{ p: 2 }}
            fontFamily={"Roboto"}
            fontWeight={500}
            fontSize={60}
          >
            WHAT IS JP2 COIN?
          </Typography>
          <Slide in direction="left" timeout={700}>
            <Typography
              variant="subtitle1"
              align="justify"
              sx={{ p: 2, ml: 10 }}
              fontSize={19}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet dui eget velit feugiat, imperdiet vestibulum sem
              ultricies. Aenean in euismod ex. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nullam sed elementum odio, a
              egestas quam. Quisque feugiat egestas magna sed iaculis. Etiam in
              pretium augue, vulputate volutpat nunc. Vivamus ac laoreet ex.
              Etiam sit amet libero ullamcorper urna iaculis convallis. Morbi
              hendrerit, massa ac maximus sodales, quam magna iaculis dui, at
              placerat erat justo viverra mauris. Pellentesque feugiat
              sollicitudin erat, sed tristique magna luctus vitae. Praesent
              rutrum molestie massa nec pellentesque. Etiam vel risus ac massa
              fringilla mattis. Nulla augue nisl, accumsan quis arcu in,
              porttitor faucibus enim. Nulla auctor eleifend arcu eu facilisis.
              Proin est magna, aliquam in pellentesque vitae, mollis in nunc. In
              pharetra mattis pretium.
            </Typography>
          </Slide>
          <Slide in direction="right" timeout={700}>
            <Typography
              variant="subtitle1"
              align="justify"
              sx={{ p: 2, mr: 10 }}
              fontSize={19}
            >
              Suspendisse mollis, nisi volutpat tristique pellentesque, est
              libero aliquet dui, sit amet pellentesque urna nibh quis eros.
              Vestibulum vitae auctor est. Fusce ultricies sapien dolor, sed
              placerat magna posuere eu. Morbi rutrum velit in velit facilisis,
              ac blandit eros vulputate. Maecenas suscipit est mauris, a
              accumsan lectus aliquam et. Morbi ut semper nibh. Praesent vitae
              urna sit amet est mollis congue.
            </Typography>
          </Slide>
          <Slide in direction="left" timeout={700}>
            <Typography
              variant="subtitle1"
              align="justify"
              sx={{ p: 2, ml: 10 }}
              fontSize={19}
            >
              Integer interdum porta dui, ullamcorper mattis sem pellentesque
              in. Suspendisse sed ante ipsum. Morbi nec velit mauris. Duis purus
              tortor, lobortis nec libero nec, sodales pharetra sem. Proin eget
              accumsan erat. Donec aliquet ante nec quam gravida consequat.
              Curabitur rutrum aliquet tristique. Pellentesque massa massa,
              semper sed accumsan ut, molestie quis augue. Vivamus ultrices
              mauris ut porta lacinia. Aenean faucibus euismod neque a semper.
              Praesent commodo mollis rhoncus. Proin sit amet est ac massa
              tristique vulputate et et lacus. Etiam sapien nunc, laoreet et
              mauris vitae, luctus lacinia nibh. Proin sit amet porttitor enim,
              sed ultrices orci. Integer mi tellus, placerat ac eros consequat,
              blandit mattis dui. Vestibulum eget hendrerit nunc, nec viverra
              felis.
            </Typography>
          </Slide>
          <Slide in direction="right" timeout={700}>
            <Typography
              variant="subtitle1"
              align="justify"
              sx={{ p: 2, mr: 10 }}
              fontSize={19}
            >
              Integer interdum porta dui, ullamcorper mattis sem pellentesque
              in. Suspendisse sed ante ipsum. Morbi nec velit mauris. Duis purus
              tortor, lobortis nec libero nec, sodales pharetra sem. Proin eget
              accumsan erat. Donec aliquet ante nec quam gravida consequat.
              Curabitur rutrum aliquet tristique. Pellentesque massa massa,
              semper sed accumsan ut, molestie quis augue. Vivamus ultrices
              mauris ut porta lacinia. Aenean faucibus euismod neque a semper.
              Praesent commodo mollis rhoncus. Proin sit amet est ac massa
              tristique vulputate et et lacus. Etiam sapien nunc, laoreet et
              mauris vitae, luctus lacinia nibh. Proin sit amet porttitor enim,
              sed ultrices orci. Integer mi tellus, placerat ac eros consequat,
              blandit mattis dui. Vestibulum eget hendrerit nunc, nec viverra
              felis.
            </Typography>
          </Slide>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
