import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material';

const RequestCard = ({ request, handleViewDetails }) => {
  return (
    <Card 
  variant="outlined" 
  sx={{ 
    marginBottom: 3, 
    backgroundColor: '#FFFFFF', // Clean, professional white background
    borderRadius: 3, // Rounded corners
    border: '1px solid #E0E0E0', // Light border for definition
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
    '&:hover': {
      transform: 'translateY(-5px)', // Lift the card on hover
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
    },
  }}
>
      <CardContent>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#1a73e8', // Use a vibrant color for the title
            fontFamily: 'Roboto, sans-serif', // Clean and modern font
          }}
        >
          {request.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Requested by: <strong>{request.requester}</strong>
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Approved by Territory Admin
        </Typography>
        <Typography variant="body2" noWrap sx={{ color: '#444' }}>
          {request.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#444' }}>
            Amount: ${request.amount.toLocaleString()}
          </Typography>
          <Typography variant="caption" sx={{ color: '#777' }}>
            Date: {new Date(request.date).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: '16px' }}>
        <Button 
          size="small" 
          variant="contained" 
          onClick={() => handleViewDetails(request)}
          sx={{ 
            backgroundColor: '#1a73e8', // Vibrant button color
            color: 'white', 
            textTransform: 'none', // Keep text case as it is
            '&:hover': {
              backgroundColor: '#155bb5', // Darker shade on hover
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequestCard;
