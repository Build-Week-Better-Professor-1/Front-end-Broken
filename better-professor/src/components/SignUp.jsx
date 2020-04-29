import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpButton1 from '../components/Buttons/SignUpButton1';

const SignUpDiv = styled.div`
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

function SignUp (props) {

    const {
        values,
        onInputChange1,
        onSubmit1,
        disabled,
        errors,
    } = props

    return (
        <SignUpDiv>
            <h2>Create An Account</h2>
                <form>
                {/* TEXT INPUTS */}<div className='errors'>{errors.fullname}</div>
                <label>Full Name<br />
                    <StyledInput
                    value={values.fullname}
                    onChange={onInputChange1}
                    placeholder='Enter Full Name'
                    name='fullname'  
                    type='text' />
                </label><br />
                <label>Email<br /><div className='errors'>{errors.email}</div>
                    <StyledInput
                    value={values.email}
                    onChange={onInputChange1}
                    placeholder='Enter Email Address'
                    name='email'  
                    type='text' />
                </label><br />
                <label>Password<br /><div className='errors'>{errors.password}</div>
                    <StyledInput
                    value={values.password}
                    onChange={onInputChange1}
                    placeholder='Create a password' 
                    name='password'
                    type='password' />
                </label><br />
                <label>Confirm Password<br /><div className='errors'>{errors.confirmpassword}</div>
                    <StyledInput
                    value={values.confirmpassword}
                    onChange={onInputChange1}
                    placeholder='Re-enter a password' 
                    name='confirmpassword'
                    type='password' />
                </label><br />
                {/* SUBMIT BUTTON */}
                <SignUpButton1 onClick={onSubmit1} disabled={disabled} />
                </form>
                <p>Already Have an account? <Link to='/Login'>Log in here</Link></p>
        </SignUpDiv>
    )
}

export default SignUp;