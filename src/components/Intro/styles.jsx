import styled from "styled-components";

export const Intro = styled.div`
    display: flex;
`

export const imgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    

    flex: 0.5;
    overflow: hidden;
`

export const image = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    background-color: #ffffff;
    
    height: 700px;
    width: 700px;

    img{
        height: 90%;
    }
`

export const TextContainer = styled.div`
position: relative;
flex: 0.5;

a{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    color: #000;

    animation: arrowBlink 2s infinite;
}

@keyframes arrowBlink {
    100% {
        opacity:0;
    }
}

`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

padding-left: 50px;

height:100%;
width: 100%;

h1{
    font-size: 60px;
    margin: 10px 0;
}
h2{
    font-size: 30px;
}
h3{
    font-size:30px;

    span{
        font-size: 30px;
        color: #1E0540;
    }

    .ityped-cursor {
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
    }

    @keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-webkit-keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-moz-keyframes blink {
    100% {
        opacity: 0;
    }
}
}
`