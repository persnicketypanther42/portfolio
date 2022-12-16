import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import { pageData } from './pagedata';
import './header.css';


function Header() {

  const logo = '<luke briody />'

  return (
    <AppBar className="Appbar" position="fixed" sx={{backgroundColor: 173795}}>
      <Container className="appbar" maxWidth="xl"
        sx={{
          display: 'block',
          margin: 'auto',
        }}
      >
        <Toolbar>
        <Typography
            className="logo"
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
              width: 'fit-content',
              marginBlockLeft: '2rem',
              marginBlockRight: '2rem',
            }}
          >
            {logo}
          </Typography>

          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'fit-content',
              marginLeft: 'auto',
            }}>
            {pageData.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton className="route" component={HashLink} to={item.router} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* <Typography
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
          </Typography> */}

          <Typography
            className="logo"
            variant="h5"
            noWrap
            component="a"
            href="/portfolio"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              width: 'fit-content',
              textAlign: 'center',
              overflow: 'revert'
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