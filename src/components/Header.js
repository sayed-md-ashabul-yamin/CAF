// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'white', // Deep blue background color
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Elevation for the app bar
      }}
    >
      <Toolbar>
      <IconButton
  color="#1E201E"
  edge="start"
  onClick={handleDrawerToggle}
  sx={{
    mr: 2,
    // Remove background color and border radius for a default flat look
    backgroundColor: 'transparent', // Ensures there's no background color
    
    borderRadius: '0', // No rounding for a flat design
    padding: '0', // No additional padding to keep it flat
    '&:hover': {
      backgroundColor: 'transparent', // No change on hover
    },
  }}
>
  <MenuIcon sx={{ fontSize: '1.8rem' }} /> {/* Larger menu icon */}
</IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.6rem', // Slightly larger font size
            color: '#3C3D37', // White color for contrast
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)', // Stronger shadow for more depth
            letterSpacing: '0.07em', // More spacing between letters for a sleek look
            fontFamily: 'Roboto, sans-serif', // Ensure a clean and modern font
          }}
        >
          Welcome to Strategy and Investment Team Page
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
