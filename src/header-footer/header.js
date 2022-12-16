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

  const logo = '< name surname / >'

  return (
    <AppBar className="Appbar" position="fixed" sx={{backgroundColor: 173795}}>
      <Container className="Appbar-container" maxWidth="xl">
        <Toolbar className="Appbar-toolbar">
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
              fontStyle: 'italic',
            }}
          >
            {logo}
          </Typography>

          <Typography
            className="logo"
            variant="h7"
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
              overflow: 'revert',
              fontStyle: 'italic',
            }}
          >
            {logo}
          </Typography>

          <List
            className="list"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'fit-content',
              marginLeft: 'auto',
            }}>
            {pageData.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton className="route" component={HashLink} smooth to={item.router} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;