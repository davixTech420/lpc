
  import React, { useEffect, useState } from "react";
  import {
    Box,
    Grid,
    Typography,
    TextField,
  } from "@mui/material";
  import { IconButton, Button } from "@mui/material";
  import HeaderPublic from "../../partials/HeaderPublic";
  import FooterPublic from "../../partials/FooterPublic";
  import {
    getJefeIJe,getShowsSala, getSalaJefe
  } from "../../../services/jefeServices";
  import { Chip, Paper, LinearProgress, Tooltip } from "@mui/material";
  import { ThemeProvider, createTheme } from "@mui/material/styles";
  import { motion, AnimatePresence } from "framer-motion";
  import EditIcon from "@mui/icons-material/Edit";
  import MailIcon from "@mui/icons-material/Mail";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import CloseIcon from "@mui/icons-material/Close";
  
  const theme = createTheme({
    palette: {
      primary: { main: "#003b46" },
      secondary: { main: "#66A5AD" },
      background: { default: "#c4dfe6", paper: "#ffffff" },
      text: { primary: "#003b46", secondary: "#07575B" },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h4: { fontWeight: 700, color: "#003b46" },
      h6: { fontWeight: 600, color: "#07575B" },
      body1: { color: "#003b46" },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 8px 20px rgba(0,59,70,0.1)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: "#66A5AD",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#07575B" },
          },
        },
      },
    },
  });
  
  const MotionPaper = motion(Paper);
  
  export default function ProfileViewInteractive() {
    const [datosAdicionales, setDatosAdicionales] = useState({});
    const [cliente, setCliente] = useState({
      nombre: "",
      apellido: "",
      tipIdentidad: "",
      identificacion: "",
      telefono: "",
      email: "",
      password: "",
      estado: true,
      nacionCliente: "",
      direccion: "",
    });
    const [formData, setFormData] = useState({
     /*  nombre: cliente.nombre,
      apellido: cliente.apellido,
      tipIdentidad: cliente.tipIdentidad,
      identificacion: cliente.identificacion, */
      telefono: "",
      email: "",
      password: cliente.password,
      estado: true,
      nacionCliente: datosAdicionales.nacionCliente,
      direccion: datosAdicionales.direccion,
    });
    const [Shows, setShows] = useState({});
  
  
/*   
    useEffect(() => {
      try {
        const clienLogi = async () => {

          const vistaDash = await MiShows(respoClien.data.id);
          setShows(vistaDash);
          console.log(vistaDash);
          
          const resClienForm = await getClienForm(respoClien.data.id);
          setDatosAdicionales(resClienForm.data);
  
          /* establecemos los datos que van en el fromulario lo que envia a a la bd puede ir cambiando *
          setFormData({
        
             telefono: respoClien.data.telefono,
             email: respoClien.data.email,
           
             estado: true,
             nacionCliente: resClienForm.data.nacionCliente,
             direccion: resClienForm.data.direccion,
           });
          
           /**
            * 
            * 
            *
        };
        clienLogi();
      } catch (error) {
        console.log(error);
      }
    }, []); */
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
      name: "Jane Doe",
      title: "Senior Software Engineer",
      location: "San Francisco, CA",
      company: "Tech Innovators Inc.",
      education: "Stanford University",
      bio: "Passionate about creating intuitive and efficient web applications. Experienced in full-stack development with a focus on React and Node.js ecosystems.",
      skills: ["React", "Node.js", "TypeScript", "GraphQL", "UI/UX Design"],
      projects: [
        { name: "E-commerce Platform", progress: 80 },
        { name: "Social Media Dashboard", progress: 65 },
        { name: "AI Chatbot", progress: 90 },
      ],
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  
  
  
    const handleSubmit = (e) => {
   /*    e.preventDefault();
      try{
  
  
        console.log(enviar);
      }catch(error){
  console.log(error);
      }
      
      
      setIsEditing(false); */
    };
  
    return (
      <>
        <ThemeProvider theme={theme}>
          <HeaderPublic />
          <Box
            sx={{
              minHeight: "100vh",
              backgroundColor: "#c4dfe6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
            }}
          >
            <MotionPaper
              elevation={3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                width: "100%",
                maxWidth: 800,
                overflow: "hidden",
                borderRadius: 4,
                position: "relative",
              }}
            >
              <Box sx={{ p: 3, position: "relative", zIndex: 1 }}>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item xs>
                    <Typography variant="h4">{cliente.nombre}</Typography>
  
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                     
                    </Box>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      onClick={() => setIsEditing(!isEditing)}
                      sx={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    >
                      {isEditing ? <CloseIcon /> : <EditIcon />}
                    </IconButton>
                  </Grid>
                </Grid>
  
                <AnimatePresence>
                  {isEditing ? (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={cliente.nombre}
                           
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={cliente.apellido}
                          
                          />
                        </Grid>
  
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="nacionCliente"
                            name="nacionCliente"
                            value={formData.nacionCliente}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="direccion"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Save Changes
                          </Button>
                        </Grid>
                      </Grid>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                        Bienvenido{" "}
                        {cliente.nombre + " Puedes Actualizar Tus Datos Aqui"}
                      </Typography>
  
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Skills
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {profileData.skills.map((skill, index) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Chip label={skill} />
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
  
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Current Projects
                        </Typography>
                        <Grid container spacing={2}>
                          {profileData.projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={project.name}>
                              <Tooltip
                                title={`${project.progress}% Complete`}
                                arrow
                              >
                                <Paper elevation={2} sx={{ p: 2 }}>
                                  <Typography variant="body2" gutterBottom>
                                    {project.name}
                                  </Typography>
                                  <LinearProgress
                                    variant="determinate"
                                    value={project.progress}
                                    sx={{
                                      height: 8,
                                      borderRadius: 4,
                                      "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#66A5AD",
                                      },
                                    }}
                                  />
                                </Paper>
                              </Tooltip>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
  
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 2,
                          mt: 4,
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton color="primary" aria-label="email">
                            <MailIcon />
                          </IconButton>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton color="primary" aria-label="linkedin">
                            <LinkedInIcon />
                          </IconButton>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton color="primary" aria-label="github">
                            <GitHubIcon />
                          </IconButton>
                        </motion.div>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </MotionPaper>
          </Box>
        </ThemeProvider>
      
      </>
    );
  }
  