import React, { useState, useEffect } from 'react';
import PortfolioList from '../PortfolioList';
import * as S from './styles';
import { featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData]  = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        }
    ];

    useEffect(() =>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
                default:
                    setData(featuredPortfolio);
        }

    },[selected])

    return(
        <S.Portfolio id="portfolio">
            <h2>
                Portfólio
            </h2>
            <ul>
               {list.map(item =>(
                   <PortfolioList 
                   title={item.title} 
                   active={selected === item.id} 
                   setSelected={setSelected}
                   id={item.id} 
                   />
               ))}
            </ul>
            <S.Container>
                {data.map((d) => (
                    <S.Item>
                    <img src={d.img} alt="" />
                    <h2>{d.title}</h2>
                </S.Item>
                    ))}
            </S.Container>
        </S.Portfolio>
    )
}