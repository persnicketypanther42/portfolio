import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Header() {

  const logo = '<luke briody />'

  return (
    <AppBar position="static" sx={{backgroundColor: 173795}}>
      <Container className="appbar" maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/portfolio"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {logo}
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/portfolio"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {logo}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;