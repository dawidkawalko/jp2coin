import { Box, Paper } from "@mui/material";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <Box
      component={Paper}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "100%",
        height: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        className="loading"
        component="img"
        alt="Loading"
        src="%PUBLIC_URL%/assets/coin_fullres.png"
        sx={{ height: { xs: "300px", md: "400px", lg: "500px" } }}
      />
    </Box>
  );
};

export default LoadingPage;
