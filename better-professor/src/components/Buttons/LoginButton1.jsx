import React from 'react';
import styled from 'styled-components';

const WhiteContainer1 = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 20%;
    background-color: #2196F3;
    border: 1px solid #2196F3;
    border-radius: 8px;
    color: white;
    margin: 1%;
    padding: 1%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

function LoginButton1 () {
    return (
        <WhiteContainer1>Login</WhiteContainer1>
    )
}

export default LoginButton1;