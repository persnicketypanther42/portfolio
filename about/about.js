import React, { Component } from 'react';
import './about.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography } from '@mui/material';

class About extends Component {

  render() {
    
    return (
            <Carousel className="about-carousel" autoPlay={false} navButtonsAlwaysVisible={false} 
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'cornflowerblue',
                        borderRadius: 0}}}>
                <Paper className="carousel-card">
                    <Typography variant="h1" className="carousel-heading">
                        about me
                    </Typography>
                    <Typography className="carousel-paragraph">
                        i’m a queer, neurodivergent undergraduate student at brown university studying computer science, applied mathematics, and pure mathematics. with my degrees and personal background, i plan to pursue a career in socially conscious computing, designing ai/ml and data tools that are accessible for all, for human good. beyond computer science and mathematics, i am incredibly passionate about poetry, fashion + clothing design, and mental health advocacy.
                    </Typography>
                    <Typography className="carousel-paragraph">
                        i greatly appreciate you taking the time to visit my page! i’m always excited to learn about and solve new problems with new people, so let’s connect! i would love to chat about dei in tech, social advocacy, and all sorts of research and design. i’m also always looking for new opportunities to learn and grow, so if you have any leads, please reach out!
                        <br />
                        <br /> phone: <a href="tel:1234567890">123-456-7890</a>
                        <br /> email: <a href="mailto:name_surname@brown.edu">name_surname@brown.edu</a>
                        <br /> linkedin: <a href="https://www.linkedin.com/in/name-surname/">linkedin.com/in/name-surname</a>                    </Typography>
                </Paper>
                <Paper className="carousel-card">
                    <Typography variant="h1" className="carousel-heading">
                        about my porfolio
                    </Typography>
                    <Typography className="carousel-paragraph">
                        I am excited to dedicate my career to developing simple and effective interfaces that make complex concepts like ai/ml accessible to a wider audience. In the field of AI/ML and data engineering, I believe that any model or data is only as valuable as it is easy to understand and use.
                    </Typography>
                    <Typography className="carousel-paragraph">
                        In my portfolio, you will find a selection of my projects that demonstrate my ability to design intuitive and user-friendly interfaces. From analyzing user interactions with simple physical interfaces to growing my proficiency in frontend web applications, I strive to create engaging and meaningful experiences for users and improve upon preexisting works. i'm excited to abstract the skills i've developed through these projects to future work in ai/ml.
                    </Typography>
                    <Typography className="carousel-paragraph">
                        Thank you for taking the time to visit my portfolio. I hope you enjoy exploring my work and learning more about my early explorations into UI/UX and human-centered design.
                    </Typography>
                </Paper>
            </Carousel>);
        
    } 
    
} export default About;