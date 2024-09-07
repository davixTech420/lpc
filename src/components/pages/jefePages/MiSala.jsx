import React, { useEffect, useState } from 'react';
import { getShowsSala ,getSalaJefe,getPedidoForm} from '../../../services/jefeServices';
import { jwtDecode } from 'jwt-decode';
import { SrcImagen } from "../../../services/publicServices";

import {
  AppBar,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  CardMedia,
  TextField,
  Button,
  Chip,
  useMediaQuery, useTheme, IconButton,Avatar
} from '@mui/material';
import { styled } from '@mui/system';
import { motion,AnimatePresence } from "framer-motion";
import { 
  TheaterComedy, 
  Event, 
  AccessTime,
  ArrowBack ,
  Star 
} from '@mui/icons-material';
import { PhotoCamera } from '@mui/icons-material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HeaderPublic from '../../partials/HeaderPublic';
import FooterPublic from '../../partials/FooterPublic';

// Crear un tema personalizado
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
});

// Estilizar el contenedor principal
const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background:"white",
  padding: theme.spacing(3),
}));

// Estilizar las tarjetas
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  flexDirection: 'column',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

// Función auxiliar para el contenido de las pestañas
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Datos de ejemplo (reemplaza esto con tus datos reales)
const showsData = [
  { id: 1, title: "Hamlet", date: "2023-07-15", time: "20:00", image: "https://source.unsplash.com/random/400x200?theater", rating: 4.5 },
  { id: 2, title: "Romeo y Julieta", date: "2023-07-22", time: "19:30", image: "https://source.unsplash.com/random/400x200?stage", rating: 4.8 },
  { id: 3, title: "El Rey León", date: "2023-07-29", time: "18:00", image: "https://source.unsplash.com/random/400x200?musical", rating: 4.9 },
  { id: 4, title: "Cats", date: "2023-08-05", time: "20:30", image: "https://source.unsplash.com/random/400x200?performance", rating: 4.2 },
];

export default function MiSala() {
  const [editedShowId, setEditedShowId] = useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
const handleEditShow = (showId) => {
  setEditedShowId(showId);
  setShowForm(showId);  
};

const handleCancelEdit = () => {
  setEditedShowId(null);
  setFormData(null);
};

const handleInputChange = (e, showId, field) => {
  // Update the show data in your state or database
};

const handleUpdateShow = (showId) => {
  // Update the show data in your state or database
  setEditedShowId(null);
};









const [pedidoForm,setPedidoForm] = useState(null);
const [showForm,setShowForm] = useState(null);

  const [value, setValue] = useState(0);
const [shows, setShows] = useState([]);
const [salaJefe,setSalaJefe] = useState([]);
const [logueado, setLogueado] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setLogueado(decoded);
    }
  }, []);

useEffect(() => {
try{
  if (!logueado?.id) return;
  const misPedidos = async () => {
    const resJefe = await getSalaJefe(logueado.id);
    setSalaJefe(resJefe.data.sala);
  const resto= await getShowsSala(resJefe.data.sala.id); 
  setShows(resto.data);
  const resPedi = await getPedidoForm(showForm);
  setPedidoForm(resPedi.data);
  }
  misPedidos();
}catch(error){
console.log(error);
}
},[logueado,editedShowId]);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const show = shows.find(show => show.id === editedShowId);
  console.log(show);

  
  const [formData,setFormData] = useState({
    cuposDisponibles: "",
    fechaPresentar:"",
  })

  




  const convertToDateInputFormat = (fecha) => {
    const [day, month, year] = fecha.split("/"); // Separa el día, mes y año
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`; // Retorna en formato YYYY-MM-DD
  };
  return ( 
<>
    <HeaderPublic />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledBox>
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs 
          sx={{mt:10 ,borderRadius:20}}
            value={value} 
            onChange={handleChange} 
            aria-label="shows tabs" 
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: "black",
                color:'white' 
              }
            }}
          >
            <Tab  label="Shows En El Teatro" icon={<TheaterComedy />} />
            <Tab label="Shows Agendados" icon={<Event />} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {shows.map((show) => (
              <Grid item xs={12} sm={6} md={4} key={show.id}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="140"
                    image={SrcImagen(show.imagen)}
                    alt={show.nombre}
                  />
                  <CardContent sx={{ backgroundColor: "#C4DFE6" }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {show.nombre}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Event fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        {show.fechaPresentar}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <AccessTime fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                       Hora Inicio:  {show.horaInicio}
                      </Typography>
                      <AccessTime fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        Hora Fin:  {show.horaFin}
                      </Typography>
                    </Box>
                    
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
<Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Próximos Shows Agendados
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, position: 'relative' }}>
        {shows.filter((show) => new Date(show.fechaPresentar) >= new Date()).map((show) => (
          <Box key={show.id} sx={{ 
            width: isLargeScreen ? 'calc(50% - 16px)' : '100%', 
            bgcolor: 'grey.100',
            borderRadius: 2,
            p: 2,
            mb: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip 
                  icon={<Event />} 
                  label={show.fechaPresentar} 
                  color="primary" 
                  variant="outlined" 
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Typography variant="body1">
                  {show.nombre} - {show.horaInicio}
                </Typography>
              </Box>
              <Box>
                <IconButton size="small"><DeleteIcon color="error" /></IconButton>
                <IconButton size="small" onClick={() => handleEditShow(show.id) && setShowForm(show.id)  }>
                  <EditIcon color="info" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}
        <AnimatePresence>
          {editedShowId && (
            <motion.div
              initial={{ x: isLargeScreen ? '100%' : 0, y: isLargeScreen ? 0 : '100%', opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: isLargeScreen ? '100%' : 0, y: isLargeScreen ? 0 : '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
            >
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 20,
                  p: 4,
                  width: isLargeScreen ? '50%' : '90%',
                  maxWidth: 600,
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5">Editar Show</Typography>
                  <IconButton onClick={handleCancelEdit} size="large">
                    <ArrowBack />
                  </IconButton>
                </Box>
                
                
                
                {show && (
                  <form style={{ overflowY: 'auto',maxHeight: '300px'}} >
                        {show.imagen ? (
                          <center>
                          <Avatar
                            src={SrcImagen(show.imagen)}
                            alt="Preview"
                            sx={{
                              width: 200,
                              height: 200,
                              borderRadius: "10px",
                              boxShadow: 2,
                              objectFit: "cover",
                            }}
                          />
                           </center>
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            No se ha seleccionado ninguna imagen.
                          </Typography>
                        )}
                       
                    




                    <TextField
                      label="Nombre"
                    
                      value={show.nombre}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    



                    <TextField
                        required
                        fullWidth
                        onKeyPress={(e) => {
                          if (!/[0-9]{1,4}/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        value={formData?.cuposDisponibles}
                        onChange={(e) => {
                          if (e.target.value.length < 5 && e.target.value >= 0) {
                            setFormData({
                              ...formData,
                              cuposDisponibles: e.target.value,
                            });
                          }
                        }}
                        inputProps={{
                          maxLength: 4,
                        }}
                        type="number"
                        id="cuposDisponibles"
                        label="cuposDisponibles"
                        name="cuposDisponibles"
                        autoComplete="family-name"
                        variant="outlined"
                      />
                      <TextField
                        required
                        fullWidth
                        value={convertToDateInputFormat(formData.fechaPresentar)}
                        onClick={(e) => setFormData({
                          ...formData,
                          fechaPresentar: convertToDateInputFormat(e.target.value),
                        })}
                        InputProps={{
                          readOnly: false,
                        }}
                        type="date"
                        id="fechaPresentar"
                        variant="filled"
                        label="fechaPresentar"
                        name="fechaPresentar"
                      />


                     <TextField
                      label="Nombre"
                      value={shows.find(show => show.id === editedShowId).nombre}
                      onChange={(e) => handleInputChange(e, editedShowId, 'nombre')}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                     <TextField
                      label="Nombre"
                      value={shows.find(show => show.id === editedShowId).nombre}
                      onChange={(e) => handleInputChange(e, editedShowId, 'nombre')}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      label="Fecha Presentar"
                      value={shows.find(show => show.id === editedShowId).fechaPresentar}
                      onChange={(e) => handleInputChange(e, editedShowId, 'fechaPresentar')}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      label="Hora Inicio"
                      value={shows.find(show => show.id === editedShowId).horaInicio}
                      onChange={(e) => handleInputChange(e, editedShowId, 'horaInicio')}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                      <Button onClick={handleCancelEdit} variant="outlined" size="large">
                        Cancelar
                      </Button>
                      <Button onClick={() => handleUpdateShow(editedShowId)} variant="contained" size="large">
                        Actualizar
                      </Button>
                    </Box>
                  </form>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
        </TabPanel>
      </StyledBox>
    </ThemeProvider>
    <FooterPublic/>
    </>
  );
}