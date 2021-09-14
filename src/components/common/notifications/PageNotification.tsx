import {
  Alert, AlertColor, AlertTitle, Box,
} from '@material-ui/core';
import React from 'react';

class PageNotificationProps {
  message: string;

  title: string;

  severity: AlertColor;
}

const PageNotification: React.FC<PageNotificationProps> = ({ message, title, severity }) => (
  <Box sx={{ mb: 1 }}>
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  </Box>
);

export { PageNotification, PageNotificationProps }
