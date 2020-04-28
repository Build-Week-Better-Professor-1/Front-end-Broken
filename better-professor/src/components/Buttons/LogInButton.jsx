import React from 'react';
import styled from 'styled-components';

const WhiteContainer = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 60%;
    background-color: white;
    border: 1px solid #2196F3;
    border-radius: 8px;
    color: #2196F3;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

function LoginButton () {
    return (
        <WhiteContainer>Login</WhiteContainer>
    )
}

export default LoginButton;