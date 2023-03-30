import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Grid } from "@mui/material";
// import '~video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import video from "../../Assets/video.mp4";
import Pulse from 'react-reveal/Pulse';


const Blog = () => {
  return (
    <div>

      <Header />
      <Pulse>
        <Grid container justifyContent="center">
          <Grid item lg={8}>
            <Player style={{ height: "200px" }}>
              <source src={video} />
            </Player>
          </Grid>
        </Grid>
      </Pulse >
      {/* "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" */}
      <Footer />

    </div>
  )
}

export default Blog;