import React, { useState, useEffect } from 'react';
// Styling
import styled from 'styled-components';
// Components
import Home from './components/Home'
import Works from './components/Works';
import Reviews from './components/Reviews';
import SignUp from './components/SignUp';
import Login from './components/Login';
// Pictures
import logo from './img/BPALogo.png';
// React Router
import { Route, Link, Switch } from 'react-router-dom';
// uuid
// import { v4 as uuid } from 'uuid';
// axios and yup
import axios from 'axios';
import * as yup from 'yup';

// URL for simulating POST requests
const url = 'https://reqres.in/api/users'

// Styles
const Header = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 2%;

  h1, h2, p {
    font-family: 'Roboto Slab', serif;
  }
  p {
    font-size: 1.6rem; 
  }
`;

const LogoContainer = styled.div`
  display:flex;
	width: 50%;
  align-items: center;
  
  
  color: #2196F3;

  .logo {
    margin: 2% 2%;
  }

  .logo-text {
    text-align: center;
    margin: 0% 0%;
  }

  h1 {
    font-size: 3.2rem;
    margin: 0% 0%;
  }

  p {
    margin: 0% 0%;
    font-size: 1.6rem;
    color: black;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #0A2738;
  color: white;
  a {
    font-family: 'Roboto Slab', serif;
    margin: 1% 2%;
    text-decoration: none;
    color: white;
  }
`;

// Form values, Errors, and Error messages
const initialLoginFormValues = {
  email: '',
  password: '',
}

const initialSignupFormValues = {
  fullname: '',
  email: '',
  password: '',
  confirmpassword: '',
}

const initialLoginFormErrors = {
  email: '',
  password: '',
}

const initialSignupFormErrors = {
  fullname: '',
  email: '',
  password: '',
  confirmpassword: '',
}

const formSchema = yup.object().shape({
  email: yup 
  .string()
  .email('valid email is required')
  .required('email is required'),
  password: yup
  .string()
  .min(5, 'at least 5 characters required for password')
  .required('password is required'),
})

const formSchema1 = yup.object().shape({
  fullname: yup
  .string()
  .min(2, 'at least 2 characters required for full name')
  .required('full name is required'),
  email: yup 
  .string()
  .email('valid email is required')
  .required('email is required'),
  password: yup
  .string()
  .min(5, 'at least 5 characters required for password')
  .required('password is required'),
  confirmpassword: yup
  .string()
  .min(5, 'at least 5 characters required for password confirmation')
  .required('password confirmation is required'),
})

function App() {

  // Login Form State
  const [users, setUsers] = useState([])

  const [formValues, setFormValues] = useState(initialLoginFormValues)
  
  const [formDisabled, setFormDisabled] = useState(true)
  
  const [formErrors, setFormErrors] = useState(initialLoginFormErrors)

  // SignUp Form State
  const [users1, setUsers1] = useState([])

  const [formValues1, setFormValues1] = useState(initialSignupFormValues)
  
  const [formDisabled1, setFormDisabled1] = useState(true)
  
  const [formErrors1, setFormErrors1] = useState(initialSignupFormErrors)

  // Simulated POST Request for Login
  const postUsers = user => {
    axios.post(url, user)
    .then(res => {
      setUsers([...users, res.data])
      debugger
    })
    .catch(err => {
      debugger
    })
  }

  // Simulated POST Request for SignUp
  const postUsers1 = user1 => {
    axios.post(url, user1)
    .then(res => {
      setUsers1([...users1, res.data])
      debugger
    })
    .catch(err => {
      debugger
    })
  }

  // Validation for Login form changes
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])

  // Validation for Sign Up form changes
  useEffect(() => {
    formSchema1.isValid(formValues1).then(valid => {
      setFormDisabled1(!valid)
    })
  }, [formValues1])

  // Login form Text input handler
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  // SignUp form Text input handler
  const onInputChange1 = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema1, name)
      .validate(value)
      .then(valid => {
        setFormErrors1({
          ...formErrors1,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors1({
          ...formErrors1,
          [name]: err.errors[0]
        })
      })

    setFormValues1({
      ...formValues1,
      [name]: value,
    })
  }

  // Login Submit form handler
  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      email: formValues.email,
      password: formValues.password,
    }

    // Post User to Api
    postUsers(newUser)
    setFormValues(initialLoginFormValues)
  }

  // SignUp Submit form handler
  const onSubmit1 = evt => {
    evt.preventDefault()

    const newUser1 = {
      fullname: formValues1.fullname,
      email: formValues1.email,
      password: formValues1.password,
      confirmpassword: formValues1.confirmpassword,
    }

    // Post User to Api
    postUsers1(newUser1)
    setFormValues1(initialSignupFormValues)
  }

  return (
    <div>
      <Header>
        <LogoContainer>
          <img src={logo} alt="Better Professor Logo" className='logo' />
          <div className='logo-text'>
            <h1>Better Professor</h1>
            <p>Deadline Management App</p>
          </div>
        </LogoContainer>
        <Link to='/Login'>Log In</Link>
      </Header>
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/HowItWorks'>How It Works</Link>
        <Link to='/Reviews'>Reviews</Link>
        <Link to='/SignUp'>Sign Up</Link>
      </Nav>
      <Switch>
        <Route path='/Login'>
          <Login
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={formDisabled}
          errors={formErrors}
          />
        </Route>
        <Route path='/SignUp'>
          <SignUp
          values={formValues1}
          onInputChange1={onInputChange1}
          onSubmit1={onSubmit1}
          disabled={formDisabled1}
          errors={formErrors1}
          />
        </Route>
        <Route path='/Reviews'>
          <Reviews />
        </Route>
        <Route path='/HowItWorks'>
          <Works />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
