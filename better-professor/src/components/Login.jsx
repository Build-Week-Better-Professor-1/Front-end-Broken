import React from 'react';
import { Link } from 'react-router-dom'

function Login () {
    return (
        <div>
            <h2>Log In</h2>
            <form>
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
                <button>Log In</button>
                </form>
                <p>Don't gave an account? <Link to='/SignUp'>Create one here</Link></p>
        </div>
    )
}

export default Login;