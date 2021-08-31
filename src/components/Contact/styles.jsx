import styled from "styled-components";

export const Contact = styled.div`
    display: flex;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;
    overflow: hidden;

    img{
        width: 100%;
    }
`


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;

    h2{
        font-size:30px;
    }

    form{
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        input{
            width: 60%;
            height: 40px;
            font-size: 18px;
            padding:0 10px
        }

        textarea{
            width: 60%;
            height: 200px;
            font-size: 18px;
            padding:0 10px;
            resize: none;
        }
        button{
            width: 30%;
            height: 40px;
            background: #532DA6;
            color: #fff;

            border: none;
            border-radius: 8px;
            cursor: pointer;
        }

        span{
            color: #24A680;
        }
    }
`