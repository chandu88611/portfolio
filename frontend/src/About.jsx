import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

import images from  "./images/IMG-20210304-WA0008.jpg"

const About = () => {
  return (
    <div className="about">
      
      <div className="aboutContainer2">
        <div>
          <img src={images} alt="CHANDAN" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           CHANDAN A S
          </Typography>

          <Typography> Full Stack Developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Fitness Trainer
          </Typography>
        </div>
        

        <div className="description">
           <Typography
            style={{
              wordSpacing: "2px",
              lineHeight: "20px",
              letterSpacing: "0.5px",
              textAlign: "left",
            color:"white"
            }}
          >I am a MERN stack Developer , Fitness Trainer and 
          Graduate in BE mechanical also Innovative Creative 
          and willing to contribute ideas and especially love learning 
          new things


           
          </Typography> 
        </div>
      </div>
    </div>
  );
};

export default About;
