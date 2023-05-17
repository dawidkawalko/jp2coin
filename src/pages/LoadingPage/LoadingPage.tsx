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
        src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pXzNi-vVALOVUNO1vmxu2ZaNdCNB97brn3sQ2zU6bA1KHbm95CAlyMlrcptr5BuN0zThcUNOxu-HeCE6wnEFQyo-kJfA=s1600"
        sx={{ height: { xs: "300px", md: "400px", lg: "500px" } }}
      />
    </Box>
  );
};

export default LoadingPage;
