import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Greetings from "../../Components/Greetings/Greetings";
import Skills from  "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div style={{overflowX:"hidden"}}>
     <Helmet>
        <title>Saubhagya Mallick| Homepage</title>
        <meta
          name="description"
          content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
        />
      </Helmet>
      <Header />
      <Greetings/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default Home
