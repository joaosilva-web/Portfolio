import React from 'react';
import * as S from './styles';

export default function PortfolioList({title, active, setSelected, id}) {
    return(
        <S.PortfolioList 
        className={active ? "active" : null} 
        onClick={() => setSelected(id)}>
        {title}
        </S.PortfolioList>
    )
}