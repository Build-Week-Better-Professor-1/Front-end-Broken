import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpButton1 from '../components/Buttons/SignUpButton1';

const SignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

function SignUp (props) {

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <SignUpDiv>
            <h2>Create An Account</h2>
                <form>
                {/* TEXT INPUTS */}
                <label>Full Name<br />
                    <input
                    placeholder='Enter Full Name'
                    name='name'  
                    type='text' />
                </label><br />
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
                <label>Confirm Password<br />
                    <input
                    placeholder='Re-enter a password' 
                    name='confirmpassword'
                    type='password' />
                </label><br />
                {/* SUBMIT BUTTON */}
                <SignUpButton1 />
                </form>
                <p>Already Have an account? <Link to='/Login'>Log in here</Link></p>
        </SignUpDiv>
    )
}

export default SignUp;