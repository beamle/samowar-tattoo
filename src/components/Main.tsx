import React, { useEffect, useState } from 'react';
import s from './Main.module.css';
import {Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax} from "react-scroll-parallax";
import Button from '@mui/material/Button';
import {styled} from "@mui/material";

const Main = () => {



    return (
        <div className={s.main}>
            <div className={s.main__container}>
                <div className={s.main__image__container}>
                        <img src="./pics/main.png" className={s.main__image} alt="Main" />
                    <div className={s.description}>
                        <h1>
                            <span style={{ color: '#a41818', fontFamily: 'Rye' }}>One-man</span> tattoo shop{' '}
                            <span style={{ color: '#5b5b5b', fontFamily: 'Rye' }}>not</span> in the city center of{' '}
                            <span style={{ color: '#0f6db2', fontFamily: 'Rye' }}>Tallinn</span>
                        </h1>
                        <div className={''}>
                            <p>High price. Middle quality. <span style={{color: "#a41818"}}>Fantastic!</span></p>
                        </div>
                    </div>
                    <div className={s.main__buttons}>
                        <SButton variant="outlined" size="large">Outlined</SButton>
                        <SButton variant="outlined" size="large">Outlined</SButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;


const SButton = styled(Button)`
  color: #fff;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 5px; 

  &:hover {
    background-color: rgba(204, 204, 204, 0.58);
    border: 1px solid #5b5b5b;
  }
`;
