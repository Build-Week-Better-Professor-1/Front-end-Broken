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
import { v4 as uuid } from 'uuid';
// axios and yup
import axios from 'axios'
import * as yup from 'yup'

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

// const initialCreateFormValues = {
//   id: uuid(),
//   email: '',
//   password: '',
//   confirmpassword: '',
// }

// const initialCreateFormErrors = {
//   email: '',
//   password: '',
//   confirmpassword: '',
// }

function App() {

  // const [users, setUsers] = useState([])

  // const [formValues, setFormValues] = useState(initialFormValues)
  
  // const [formDisabled, setFormDisabled] = useState(true)
  
  // const [formErrors, setFormErrors] = useState(initialFormErrors)

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
          <Login />
        </Route>
        <Route path='/SignUp'>
          <SignUp
          // values={formValues}
          // disabled={formDisabled}
          // errors={formErrors}
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
