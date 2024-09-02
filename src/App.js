// src/App.js
import React, { useState } from 'react';
import { Box, Toolbar, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RequestList from './components/RequestList';
import RequestDetailsDialog from './components/RequestDetailsDialog';
import Profile from './components/Profile'; // Import Profile component
import requestsData from './data/requests';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('Pending Requests');
  const [requests, setRequests] = useState(requestsData);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setDetailsDialogOpen(true);
  };

  const handleCloseDetailsDialog = () => {
    setDetailsDialogOpen(false);
    setSelectedRequest(null);
  };

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: 'approved' } : req
      )
    );
    handleCloseDetailsDialog();
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: 'rejected' } : req
      )
    );
    handleCloseDetailsDialog();
  };

  const filteredRequests = requests.filter((req) => {
    if (selectedMenu === 'Pending Requests') return req.status === 'pending';
    if (selectedMenu === 'Approved Requests') return req.status === 'approved';
    return true;
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        open={sidebarOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleMenuClick={handleMenuClick}
        selectedMenu={selectedMenu}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, padding: 3, marginLeft: sidebarOpen ? 30 : 0 }}
      >
        <Toolbar />
        {selectedMenu === 'Profile' ? (
          <Profile onClose={() => setSelectedMenu('Pending Requests')} />
        ) : (
          <>
            <RequestList
              requests={filteredRequests}
              handleViewDetails={handleViewDetails}
            />
            <RequestDetailsDialog
              open={detailsDialogOpen}
              handleClose={handleCloseDetailsDialog}
              request={selectedRequest}
              handleApprove={handleApprove}
              handleReject={handleReject}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
