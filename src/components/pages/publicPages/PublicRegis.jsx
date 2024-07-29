import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function PublicRegis() {

    const[formData,setFormData] = useState({
      nombre: "",
      apellido: "",
      tipIdentidad: "",
      identificacion: "",
      telefono: "",
      email: "",
      password: "",
      estado:true,
      role: "admin",
    });

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try{
      const regis = await axios.post('http://localhost:3001/api/auth/register', formData);
      console.log(regis.data);
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoFocus
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={formData.apellido}
                  onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  autoComplete="family-name"
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 190 }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Tipo De Identificacion
                  </InputLabel>
                  <Select
                    value={formData.tipIdentidad}
                    onChange={(e) => setFormData({ ...formData, tipIdentidad: e.target.value })}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"C.C"}>Cedula Ciudadania</MenuItem>
                    <MenuItem value={"T.I"}>Tarjeta De Identidad</MenuItem>
                    <MenuItem value={"Pasaporte"}>Pasaporte</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  id="telefono"
                  variant="filled"
                  label="Telefono"
                  name="telefono"
                  autoComplete="family-name"
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
}
