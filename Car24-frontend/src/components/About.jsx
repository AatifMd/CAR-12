import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

function About() {
  return (
    <Container>
      <Grid container spacing={4} sx={{ padding: "50px 0" }}>
        {/* First Zig-Zag Section: Text Left, Image Right */}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Car12 is a leading platform that strives to bring you the best car
            buying and selling experience. Our goal is to provide a seamless and
            user-friendly service to customers who want to make informed
            decisions about their cars, whether it’s used, new, or pre-owned
            models.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            We pride ourselves on offering transparent services and competitive
            prices, ensuring that every customer is completely satisfied with
            their purchase or sale. With the latest tools, resources, and a vast
            inventory, Car12 is the car marketplace of the future.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage:
                "url(https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/22/16927012425691.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
        {/* Second Zig-Zag Section: Image Left, Text Right */}
        <Grid item xs={12} md={6} sx={{ order: { md: 1 } }}>
          <Box
            sx={{
              backgroundImage:
                "url(https://images.hindustantimes.com/auto/img/2024/06/13/1600x900/Kia_Seltos_Sonet_Carens_1711019457527_1718256226369.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            We offer a range of services to meet all your car needs. Whether
            you're interested in buying a used car, selling your current
            vehicle, or purchasing a brand-new model, we have the right
            solutions for you. We also provide vehicle history reports,
            financing options, and after-sales support.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Our customer service team is always available to guide you through
            every step of the car buying or selling process. At Car12, we
            believe in making your experience as smooth and hassle-free as
            possible.
          </Typography>
        </Grid>

        {/* Third Zig-Zag Section: Text Left, Image Right */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1397252319/photo/red-car-paked-in-underground-garage-with-lots-of-vehicles.jpg?s=612x612&w=0&k=20&c=7gJGxivQmZTQAQaKG8kruTBa7kGjKz25GLt2-90pz0k=)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Why Choose Car12?
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Our platform is designed to make car transactions effortless. We
            offer a wide range of vehicles from trusted brands, along with a
            transparent and easy-to-understand pricing structure. Whether you're
            a first-time buyer or a seasoned car owner, Car12 is here to cater
            to all your needs.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            With Car12, you can explore various car models, check detailed
            vehicle history reports, and even arrange financing options that
            suit your budget.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
