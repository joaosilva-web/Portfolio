import styled from "styled-components";

export const App = styled.div`
 height: 100vh;
 

 `
 export const Sections = styled.div`
    position: relative;
    top: 70px;
    scroll-snap-type: y mandatory;

     background-color: #fff;

     height: calc(100vh - 70px);
     width: 100%;

     scroll-behavior: smooth;
     scrollbar-width: none; //for firefox
     &::-webkit-scrollbar{
         display: none;
     }

     > * {
        scroll-snap-align: start;

         min-height: calc(100vh - 70px);
         width: 100vw;
     }
 `