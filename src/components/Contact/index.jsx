import React, { useState } from 'react';
import * as S from './styles';

import hands from '../../images/hands.png'

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return(
        <S.Contact>
            <S.ImgContainer>
                <img src={hands} alt="" />
            </S.ImgContainer>
            <S.FormContainer>
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="type your Email..."/>
                    <textarea placeholder="type your message..."></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </S.FormContainer>
        </S.Contact>
    )
}