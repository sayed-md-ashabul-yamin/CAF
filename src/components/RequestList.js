// src/components/RequestList.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import RequestCard from './RequestCard';

const RequestList = ({ requests, handleViewDetails }) => {
  return (
    <>
   <Typography 
  variant="h5" 
  sx={{ 
    marginBottom: 3, 
    fontWeight: 'bold', 
    color: '#333', // Darker color for a more professional tone
    
    letterSpacing: '0.1em', // Adds spacing between letters for clarity
    borderBottom: '2px solid #ccc', // Adds a subtle underline to separate the heading from content
    paddingBottom: '10px', // Adds padding to make the underline visually balanced
  }}
>
  Hey Sheila, Below Requests are Pending for Your Approval
</Typography>

      <Grid container spacing={2}>
        {requests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request.id}>
            <RequestCard request={request} handleViewDetails={handleViewDetails} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RequestList;
