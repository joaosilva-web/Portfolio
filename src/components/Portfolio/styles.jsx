import styled from "styled-components";

export const Portfolio = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2{
    font-size: 50px;
}

ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
}
`


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 70%;
`

export const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;

border-radius: 20px;
color: #fff;
margin: 10px 20px;

height:150px;
width: 220px;

position: relative;
overflow: hidden;
transition: all 0.5s ease;
cursor: pointer;

&:hover {
    background-color: #1E0540;
    img{
        opacity: 0.2;
        z-index: 0;
    }
}

img {
    width:100%;
    z-index: 1;
}
h2 {
    position: absolute;
    font-size: 20px;
}
`