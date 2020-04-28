import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton1 from '../components/Buttons/LoginButton1';
import styled from 'styled-components';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

function Login () {
    return (
        <LoginDiv>
            <h2>Log In</h2>
            <form>
                <label>Email<br />
                    <input
                    placeholder='Enter Email Address'
                    name='email'  
                    type='text' />
                </label><br />
                <label>Password<br />
                    <input
                    placeholder='Create a password' 
                    name='password'
                    type='password' />
                </label><br />
                <LoginButton1 />
                </form>
                <p>Don't have an account? <Link to='/SignUp'>Create one here</Link></p>
        </LoginDiv>
    )
}

export default Login;