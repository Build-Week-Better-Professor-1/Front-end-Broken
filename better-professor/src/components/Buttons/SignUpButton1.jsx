import React from 'react';
import styled from 'styled-components';

const BlueContainer = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 20%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 1%;
    padding: 1%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

function SignUpButton1 () {
    return (
        <BlueContainer>Sign Up</BlueContainer>
    )
}

export default SignUpButton1;