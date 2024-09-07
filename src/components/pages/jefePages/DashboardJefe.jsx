
import { useState,useEffect } from "react";
import { Button } from "@mui/material";
import { Typography,Grid,Box,Paper,Avatar,Container,List,ListItem,ListItemText } from "@mui/material";
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { jwtDecode } from "jwt-decode";
import { getSalaJefe,getShowsSala } from "../../../services/jefeServices";



export default function DashboardJefe() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)



const [teatro,setTeatro] = useState([]);
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
      setSalaJefe(resJefe.data.jefe);
      setTeatro(resJefe.data.sala);
    const resto= await getShowsSala(resJefe.data.sala.id); 
    setShows(resto.data);
    }
    misPedidos();
  }catch(error){
  console.log(error);
  }
  },[logueado]);



  return (
<>


<HeaderPublic />
    <Box sx={{ flexGrow: 1, p: 2, mt:13 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">{salaJefe.nombre}</Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Total De Shows De La Sala</Typography>
              <Typography variant="h4">{shows.length}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Messages</Typography>
              <Typography variant="h4">5</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Tasks Completed</Typography>
              <Typography variant="h4">18</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Recent Projects</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Project Meeting" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Design Review" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Code Deployment" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Client Feedback" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Team Meeting" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Quick Links</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Help Center" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>Email: support@dashboard.com</Typography>
            <Typography>Phone: +123 456 7890</Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Box>
  <FooterPublic/>
  </>
  )
}