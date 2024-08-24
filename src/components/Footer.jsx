// Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#3f51b5",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              про нас
            </Typography>
            <Typography variant="body2">я ебу собак</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              анекдоты
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                человек пук
              </Link>
              <br />
              <Link href="#" color="inherit">
                картофельный член
              </Link>
              <br />
              <Link href="#" color="inherit">
                отрышка как у гадзилы
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Пни меня
            </Typography>
            <Typography variant="body2">
              Сосать раки
              <br />
              сосааать
              <br />
              сосааааааать
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} ххуй. пенис. член. джуджун
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
