import { Box } from "@mui/material";

const Uniswap = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start">
      <Box
        component="iframe"
        title="uniswap"
        src="https://app.uniswap.org/#/swap?outputCurrency=0x5349874977eBD48810008567ada7Dbbf0f401b94"
        height="660px"
        width="100%"
        sx={{ border: 0 }}
      />
    </Box>
  );
};

export default Uniswap;
