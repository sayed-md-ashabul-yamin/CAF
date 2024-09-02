
import React from 'react';

import sidebarPicture from '../images/tomCAF.jpeg'; 
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@mui/material';
import {
  Person,
  PendingActions,
  CheckCircle,
} from '@mui/icons-material';

const Sidebar = ({ open, handleDrawerToggle, handleMenuClick, selectedMenu }) => {
  const menuItems = [
    { text: 'Profile', icon: <Person /> },
    { text: 'Pending Requests', icon: <PendingActions /> },
    { text: 'Approved Requests', icon: <CheckCircle /> },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 280, // Slightly wider for more space
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#eb8c00', // Light grey background for a modern look
          boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          borderRight: '1px solid #e0e0e0', // Border to separate from main content
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 3,
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 4,
          backgroundColor: '#eb8c00', // White background for the profile section
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for profile area
        }}
      >
        <Avatar
          alt="Sheila Reichert"
          src={sidebarPicture}
          sx={{
            width: 120, // Larger avatar
            height: 120, 
            marginTop: 5,
            marginBottom: 1,
            border: '3px solid #1a73e8', // Border around the avatar for emphasis
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#333333', // Dark text color for contrast
            fontFamily: 'Roboto, sans-serif', // Modern font
            marginTop: 2, 
          }}
        >
          Tanisha Shruti
        </Typography>
        <Typography variant="body2" color="#3C3D37">
          Director, CAF
        </Typography>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            selected={selectedMenu === item.text}
            onClick={() => handleMenuClick(item.text)}
            sx={{
              padding: '12px 20px', // Padding for larger clickable area
              borderRadius: '8px', // Rounded corners for buttons
              marginX: 1, // Side margin to create separation
              marginY: 0.5, // Vertical margin between items
              transition: 'background-color 0.3s ease', // Smooth transition for hover effect
              '&:hover': {
                backgroundColor: '#e3f2fd', // Light blue background on hover
              },
              '&.Mui-selected': {
                backgroundColor: '#1a73e8', // Primary color for selected item
                color: '#ffffff', // White text for selected item
                '& .MuiListItemIcon-root': {
                  color: '#ffffff', // White icon color for selected item
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40, // Ensure icon area is large enough
                color: selectedMenu === item.text ? '#ffffff' : '#333333', // Icon color based on selection
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: selectedMenu === item.text ? 'bold' : 'normal',
                fontFamily: 'Roboto, sans-serif', // Ensure consistent modern font
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
