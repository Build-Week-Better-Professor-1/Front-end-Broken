import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from 'axios'
import {StyledForm} from "./RegisterForm";

const LoginForm = (props) => {
    const [input,setInput] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    const login = (event) => {

        event.preventDefault();

        axios
            .post('https://betterprofessorapp.herokuapp.com/api/auth/login',input)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
               // props.history.push('/student-list');

            })
            .catch(err => console.log(err) ? alert("Success") : alert("Check Input"))
    }

    return(
        <div>
            <StyledForm>
            <form onSubmit={login}>
                <label htmlFor="name">Name:</label>
                <input
                    type= 'text'
                    value={input.email}
                    name='email'
                    placeholder='...enter username'
                    onChange={handleChange}
                />
                <label htmlFor="name">Password</label>
                <input
                    type='password'
                    value={input.password}
                    name='password'
                    placeholder='...enter password'
                    onChange={handleChange}
                />
                <button className="login-button">LOG IN</button>

                <div className="create-acct">
                    <Link className="acct-link" to="/register">Create an Account</Link>
                </div>
            </form>
            </StyledForm>
        </div>
    )
}

export default LoginForm