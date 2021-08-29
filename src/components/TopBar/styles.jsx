import styled from "styled-components";

export const TopBar = styled.header`
    position: fixed;

    display: flex;
    
    height: 70px;
    width: 100%;

    z-index: 2;
`

export const wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`

export const logo = styled.div`

    a{
        color: #fff;
        text-decoration: none;

        h2{
            color: #A359CF;
        }
    }
`

export const list = styled.ul`
    display: flex;
    
    li{
        margin: 0 10px;

        a{
            color: #A359CF;
            text-decoration: none;
        }
    }
`