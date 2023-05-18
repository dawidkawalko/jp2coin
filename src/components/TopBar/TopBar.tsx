import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeToggler from "../ThemeToggler";
import useAppImages from "../../hooks/useAppImages";
import { isMobile } from "react-device-detect";

const pages = ["get your coin", "uniswap", "whitepaper", "nft", "contact"];
const title = "JP2Coin";

const smoothScroll = (anchor: string) => {
  document
    .querySelector(`#${anchor.replaceAll(" ", "")}`)
    ?.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
};

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { appImages } = useAppImages();

  return (
    <AppBar position="sticky" elevation={5}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            mr={2}
            component="img"
            alt="Top bar icon"
            src={appImages.coin.src}
            sx={{ height: "32px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "gold",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Button}
                  onClick={() => {
                    handleCloseNavMenu();
                    smoothScroll(page);
                  }}
                  key={page}
                >
                  <Typography textAlign="center">
                    {page.toLocaleUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  smoothScroll(page);
                }}
                sx={{ my: 2, mx: 1, color: "white", display: "block" }}
              >
                <Typography fontSize={18} fontWeight={500}>
                  {page.toLocaleUpperCase()}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggler />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
