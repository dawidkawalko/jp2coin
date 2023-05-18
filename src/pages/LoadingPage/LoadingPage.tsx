import { Box, Paper } from "@mui/material";
import "./LoadingPage.css";
import useAppImages from "../../hooks/useAppImages";

const LoadingPage = () => {
  const { appImages } = useAppImages();

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
        src={appImages.coin.src}
        sx={{ height: { xs: "200px", sm: "300px", md: "350px", lg: "400px" } }}
      />
    </Box>
  );
};

export default LoadingPage;
