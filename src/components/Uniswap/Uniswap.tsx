import { Box } from "@mui/material";

const Uniswap = () => {
  return (
    <>
      <Box className="anchor-uniswap" id="uniswap"></Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Box
          component="iframe"
          title="uniswap"
          src="https://app.uniswap.org/#/swap?outputCurrency=0x5349874977eBD48810008567ada7Dbbf0f401b94"
          height="660px"
          width="100%"
          sx={{ border: 1, borderColor: "gold" }}
        />
      </Box>
    </>
  );
};

export default Uniswap;
