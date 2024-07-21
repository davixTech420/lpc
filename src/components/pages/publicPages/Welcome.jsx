import React from "react";
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { Box, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import portada from "../../../images/portada.webp";
;

/* esta es la vista de inicio */
export default function Welcome() {

/*   const navegar = useNavigate();

  function nav(path) {
    navegar(path);
  }
 */

  return (
    <>
      <HeaderPublic />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "100vh" },
              order: { xs: 1, md: 2 },
            }}
          >
            <img
              src={portada}
              alt="Imagen"
              style={{
                maxWidth: "110%",
                maxHeight: "110%",
                transform: "rotate(-15deg)",
                marginTop: "50px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "100vh" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Card sx={{ minWidth: 275, marginTop: "50px" }}>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  Teatro Galan
                </Typography>
                <Typography sx={{ whiteSpace: "pre-line" }} variant="body2">
                  {"\n"} Aforo Maximo : 150 {"\n"}
                  Cupos Disponibles : 15 {"\n"}
                  Direccion : Cra 7 #22 - 47 {"\n"}
                  Hora Inicio: 8:00am {"\n"}
                  Hora Final : 11:00am {"\n"}
                </Typography>
                <br />
                <Button
                onclick={() => window.open("https://www.tuboleta.com/","_blank")}
                  sx={{ display: "block", width: "100%", maxWidth: "100%" }}
                >
                  Tu Boleta
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <FooterPublic />
    </>
  );
}
