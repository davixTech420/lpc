
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

   
      


export default function PublicLogin() {
 
  const[formData,setFormData] = useState({    
    identificacion: "",
    email: "",
    password: "",   
  });

const handleSubmit = async  (e) => {
  e.preventDefault();
  try{
    const regis = await axios.post('http://localhost:3001/api/auth/login', formData);
    console.log(regis.data);
    localStorage.setItem('token', regis.data.token);
    localStorage.setItem('role',regis.data.role);
  } catch (error) {
    console.log(error);
  }
};

return (
  <>
    <HeaderPublic />
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Secion
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
           

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.identificacion}
                onChange={(e) => setFormData({ ...formData, identificacion: e.target.value })}
                id="identificacion"
                label="Identificacion"
                name="identificacion"
                autoComplete="family-name"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                variant="filled"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" />
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    <br />

    <FooterPublic />
  </>
);
};
