import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, 
    List, ListItem, ListItemButton, ListItemText,
    Toolbar, Typography, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './styles';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const classes = useStyles();

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} className={classes.box}>
        <Typography variant="h6" sx={{ my: 2 }}>
          AS Serwis
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton className={classes.box}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div>
        <AppBar sx={{ backgroundColor: '#eb331e' }} component="nav" >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.7, marginLeft: '19%', display: { xs: 'none', sm: 'block' } }}
            >
              AS Serwis
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} disableRipple sx={{
                  borderColor: 'white',
                  boxShadow: 'none',
                  color: 'white',
                  '&:hover': {
                      color: 'orange',
                      boxShadow: 'none',
                      backgroundColor: '#eb331e',
                      borderColor: 'white',
                }}}>
                    {item}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    );
}