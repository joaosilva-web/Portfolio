import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { init } from 'ityped';

import euPensando from '../../images/euPensando1.png';

export default function Intro() {



    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
             showCursor: true,
             backDelay: 1500,
             backSpeed: 60,
             strings: ['ReactJS!', 'JavaScript!','CSS!','HTML!'] })
    }, []);

    return(
        <S.Intro id="intro">
            <S.imgContainer>
                <S.image>
                    <img src={euPensando} alt="" />
                </S.image>
            </S.imgContainer>
            <S.TextContainer>
                <S.Wrapper>
                    <h2>Hi there, I'm</h2>
                    <h1>João Gustavo Ribeiro da Silva</h1>
                    <h3>I work with <span ref={textRef}></span> </h3>
                </S.Wrapper>
                <a href="#portfolio">
                    <FontAwesomeIcon icon={faAngleDown} size="6x"/>
                </a>
            </S.TextContainer>
        </S.Intro>
    )
}