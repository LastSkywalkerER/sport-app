import React from 'react';
import { Link } from 'react-router-dom';
import Bio from '../bio/bio';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@emotion/react';
import { ThemeOptions } from '@mui/material/styles';
import useStyles from './headerStyle';

import { RootStateOrAny, useSelector } from 'react-redux';

const pages = ['deskList'];

export default function Header(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const isAuth = useSelector((state: RootStateOrAny) =>
    Boolean(state.authUID.value),
  );
  const theme: ThemeOptions = useTheme();
  const {
    appBar,
    mobileLogo,
    mobileMenuWrapper,
    mobileMenu,
    desktopLogo,
    desktopMenuWrapper,
    desktopMenuItem,
  } = useStyles();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={mobileLogo}>
            SkyTrello
          </Typography>

          {isAuth ? (
            <Box sx={mobileMenuWrapper}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={mobileMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}
          <Typography variant="h6" noWrap component="div" sx={desktopLogo}>
            SkyTrello
          </Typography>
          {isAuth ? (
            <Box sx={desktopMenuWrapper}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={desktopMenuItem}
                >
                  <Link to={`/${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>
          ) : null}

          {isAuth ? <Bio /> : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
