// src/components/RequestDetailsDialog.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for better styling control
const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 12,
    padding: '24px',
    background: 'linear-gradient(135deg, #ffffff, #f0f4f8)',
    boxShadow: theme.shadows[8],
  },
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#003366',
  color: '#fff',
  padding: '20px',
  borderRadius: '12px 12px 0 0',
  fontWeight: 'bold',
}));

const CustomButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 8,
  textTransform: 'none',
  ...(variant === 'contained' && {
    boxShadow: theme.shadows[4],
    '&:hover': {
      boxShadow: theme.shadows[6],
      transform: 'scale(1.03)',
    },
  }),
}));

const RequestDetailsDialog = ({
  open,
  handleClose,
  request,
  handleApprove,
  handleReject,
}) => {
  if (!request) return null;

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <CustomDialogTitle>
        Investment Request Details
      </CustomDialogTitle>
      <DialogContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            marginBottom: '16px',
            color: '#333',
            fontWeight: 'bold',
          }}
        >
          {request.title}
        </Typography>
        {Object.entries({
          'Primary Investment Sponsor Name': request.Primary_investment_Sponsor_Name,
          'Territory Name': request.Territory_Name,
          'Primary Vertical Focus': request.Primary_Vertical_Focus,
          'Primary Horizontal Focus': request.Primary_Horizontal_Focus,
          'Territories Benefitted': request.Territories_benefitted,
          'How Will It Benefit the Territories': request.How_benefit,
          'Amount': `$${request.amount.toLocaleString()}`,
          'Date': new Date(request.date).toLocaleDateString(),
          'Status': request.status.charAt(0).toUpperCase() + request.status.slice(1),
        }).map(([label, value]) => (
          <Typography key={label} variant="body1" paragraph>
            <strong>{label}:</strong> {value}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions
        sx={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => handleApprove(request.id)}
        >
          Approve
        </CustomButton>
        <CustomButton
          variant="contained"
          color="secondary"
          onClick={() => handleReject(request.id)}
        >
          Reject
        </CustomButton>
        <CustomButton
          variant="text"
          onClick={handleClose}
        >
          Close
        </CustomButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default RequestDetailsDialog;
