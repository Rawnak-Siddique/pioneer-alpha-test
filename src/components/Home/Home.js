import React from 'react';
import Navbar from '../Navbar/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home" >
      <Navbar className="home_Navbar" />
      <div className="home_Content">
        <h1>A picture is worth a thousand words</h1>
        <div className="home_ContentInfo">
          <p>It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
        </div>
      </div>
      <div className="home_ContentArrow d-flex justify-content-between">
          <IconButton>
            <ArrowBackIcon className="home_ContentInfoArrowL" />
          </IconButton>
          <IconButton>
            <ArrowForwardIcon className="home_ContentInfoArrowR" />
          </IconButton>
        </div>
        <div className="home_ContentVG d-flex justify-content-start">
          <Link to="/gallery" className="home_ContentVGBtn" >View Gallery</Link>
        </div>
    </div>
  );
}

export default Home;
