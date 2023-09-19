import Container from '@mui/material/Container';
import React from 'react';
import s from './About.module.css';
import {Parallax, ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";

const About = () => {

    return (
        <div className={s.about}>
            <Parallax speed={-5} translateY={[10, -200]}>
                <Container>
                    <h1 style={{fontFamily: "Abril Fatface"}}>Why Samowar?</h1>
                </Container>
                <Container>
                    <div className={s.about__description}>
                        <p>High price. Middle quality. <span style={{color: "#a41818"}}>Fantastic!</span></p>
                    </div>
                </Container>
            </Parallax>
        </div>
    );
};

export default About;
