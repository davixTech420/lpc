import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
 
  Box,
} from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FooterPublic = () => {

const navegar = useNavigate();


function nav(path){
  navegar(path);
}



  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px' , position: 'center' , bottom: 0 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary">
              LPC
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras mattis consectetur purus sit amet fermentum.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Facebook" sx={{ color: '#3b5999' }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: '#c32462' }}>
                <Instagram />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: '#1da1f2' }}>
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary">
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
              <br />
              Phone: +1-234-567-890
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button onClick={() => nav("/condiciones")} variant="outlined" color="primary">
                Terminos & Condiciones
              </Button>
              <Button variant="outlined" color="primary">
                Privacy Policy
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="body2" color="textSecondary">
            Copyright © 2023 LPC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterPublic;
