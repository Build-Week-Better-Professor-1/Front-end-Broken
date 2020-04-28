import React from 'react';
import { Link } from 'react-router-dom';

function SignUp (props) {

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <div>
            <h2>Create An Account</h2>
                <form>
                {/* TEXT INPUTS */}
                <label>Email:<br />
                    <input
                    placeholder='Enter Email Address'
                    name='email'  
                    type='text' />
                </label><br />
                <label>Password:<br />
                    <input
                    placeholder='Create a password' 
                    name='password'
                    type='password' />
                </label><br />
                <label>Confirm Password:<br />
                    <input
                    placeholder='Re-enter a password' 
                    name='confirmpassword'
                    type='password' />
                </label><br />
                {/* SUBMIT BUTTON */}
                <button>Create Account</button>
                </form>
                <p>Already Have an account? <Link to='/Login'>Log in here</Link></p>
        </div>
    )
}

export default SignUp;