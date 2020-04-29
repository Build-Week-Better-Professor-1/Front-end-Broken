import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton1 from '../components/Buttons/LoginButton1';
import styled from 'styled-components';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    .errors{
        color: red;
    }
`;

const StyledInput = styled.input`
    height: 32px;
    border-radius: 8px;
    border: 1px solid black;
    text-align: center;
    margin: 1% 0%;
`;

function Login (props) {

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <LoginDiv>
            <h2>Log In</h2>
            <form>
                {/* Errors */}
                <div className='errors'>
                    
                    
                </div>
                {/* Inputs */}<div className='errors'>{errors.email}</div>
                <label>Email<br />
                    <StyledInput
                    value={values.email}
                    onChange={onInputChange}
                    placeholder='Enter Email Address'
                    name='email'  
                    type='text' />
                </label><br />
                <label>Password<br /><div className='errors'>{errors.password}</div>
                    <StyledInput
                    value={values.password}
                    onChange={onInputChange}
                    placeholder='Enter a password' 
                    name='password'
                    type='password' />
                </label><br />
                {/* Login Submit button */}
                <LoginButton1 onClick={onSubmit} disabled={disabled} />
                </form>
                <p>Don't have an account? <Link to='/SignUp'>Create one here</Link></p>
        </LoginDiv>
    )
}

export default Login;