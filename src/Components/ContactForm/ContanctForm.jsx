import React from 'react';
import Header from '../../Components/Header/Header';
import { Helmet } from 'react-helmet';
import { Fade } from "react-reveal";
import { CardContent, Grid, Typography, Card, Divider, Button, Stack, Chip } from "@mui/material";
import SocialIcon from "../SocialMediaicons/SocialIcon";
import Gitdata from "../../Components/Git Data/Gitdata";
import Footer from '../../Components/Footer/Footer';
import img2 from "../../Assets/img2.png";
import { greeting } from "../.././Protfolio";
import LocationOnIcon from '@mui/icons-material/LocationOn';



const ContanctForm = () => {

  const handleOpen = () => {

    window.open('https://drive.google.com/file/d/1sHI-7-BfXJ1U9FmIqcDD3CWvKSMA0wBc/view?usp=share_link')

  }
  const handleOpen2 = () => {

    window.open('https://goo.gl/maps/7RHqpkGdg8XtRoVy7 ')

  }
  return (
    <div>
      <Helmet>
        <title>Saubhagya Mallick | Contanct </title>
        <meta
          name="description"
          content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
        />
      </Helmet>
      <Header />
      <Fade top duration={2000} distance="40px">
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: "50px" }} >
            <Grid item lg={4}>
              <img style={{ width: "400px", height: "380px", borderRadius: "0px 50px 0px 50px", boxShadow: "initial" }} className="shadow" src={img2} alt="logo" />


            </Grid>
          <Grid item lg={6}>
            <Typography variant='h3' style={{ textAlign: "center", fontWeight: "bold" }}>Contact Me
            </Typography>
            <br />
            <Typography variant='h6' style={{ textAlign: "center", color: "#EEEEEE" }} > I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  Web Development, UI Design,  React, Android, Cloud and Opensource Development.</Typography>
            <br />

            <Grid container justifyContent="center" >
              <SocialIcon />
            </Grid>
            <br />
            <Button variant='contained' color="secondary" style={{ float: "center", display: "flex", margin: "auto", borderRadius: "30px", boxShadow: "0px 0px 5px 5px #E1BEE7 " }}
              newTab={true} onClick={handleOpen}
            >See My Resume</Button>

          </Grid>



        </Grid>

      </Fade>

      <Fade right duration={2000} distance="100px">
        <Gitdata />
      </Fade>

      <Fade left duration={2000} distance="60px">
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: "50px" }} >
          <Grid item lg={4}>
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_sj0skmmg.json"
              style={{ width: "95%", height: "70%" }}
              loop
              autoplay
              background="transparent"
              speed="1"
            ></lottie-player>


          </Grid>
          <Grid item lg={6}>
            <Typography variant='h3' style={{ textAlign: "center", fontWeight: "bold", color: "#E0E0E0", }}>Address
            </Typography>
            <Typography variant='h6' style={{ textAlign: "center", color: "#E1BEE7", fontFamily: "cursive" }} > Patel Niwas , Plot No-55/2799 , Sai Vihar ,Infocity Square ,Pin- 751012,Bhubaneswar
            </Typography>
            <br />
            <Typography variant='h5' style={{ textAlign: "center", fontWeight: "bold", fontFamily: "cursive", color: "#E0E0E0" }}>Mobile Number :- <span style={{ color: "#E1BEE7", fontSize: "18px" }}>+91 8984140247</span>
            </Typography>
            <br />
            <Button variant='contained' color="success" style={{ float: "center", display: "flex", margin: "auto", borderRadius: "30px", boxShadow: "0px 0px 5px 5px #E1BEE7 " }}
              newTab={true} onClick={handleOpen2}
            >View My Location &nbsp; <LocationOnIcon fontSize='small' /> </Button>
          </Grid>
        </Grid>
      </Fade>
      <Footer />
    </div>
  )
}

export default ContanctForm