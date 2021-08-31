import React from 'react';
import * as S from './styles'

export default function TopBar() {
    return(
        <S.TopBar>
            <S.wrapper>
                <S.logo>
                    <a href="#intro"><h2>Silva Web Dev</h2></a>
                </S.logo>
                <S.list>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </S.list>
            </S.wrapper>
        </S.TopBar>
    )
}