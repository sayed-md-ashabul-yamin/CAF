// src/components/Profile.js
import React from 'react';
import { Box, Typography, Button, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import the local image
import jerryImage from '../images/jerry.jpeg';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: 'auto',
  background: '#ffffff',
  borderRadius: 12,
  boxShadow: theme.shadows[4],
}));

const ProfileHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const ProfilePicture = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(2),
}));

const Profile = ({ onClose }) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePicture src={jerryImage} alt="Tanisha Shruti" />
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Tanisha Shruti
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Director, APA CAF Operations
          </Typography>
        </Box>
      </ProfileHeader>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body1" paragraph>
        Tanisha Shruti is the Director responsible for APA CAF operations. She oversees the overall strategy and investment decisions for the APA Consulting Action Fund. Tanisha has a proven track record of leading teams and driving strategic initiatives.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onClose}
        sx={{ marginTop: 2 }}
      >
        Close
      </Button>
    </ProfileContainer>
  );
};

export default Profile;
