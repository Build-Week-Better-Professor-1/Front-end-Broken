import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import phone from '../img/bpa-phone.jpg';

const Section = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 4%;

  h1, h2, p {
    font-family: 'Roboto Slab', serif;
  }

  h2 {
    font-size: 3.5rem;
    margin: 1% 1%;
  }

  p {
    font-size: 1.5rem;
    margin: 0% 1%;
  }

  .homepage-pitch{
	display:flex;
	flex-direction:column;
    justify-content:flex-start;
    padding: 0 2%;
    width: 80%;
  }

  .signup-btn{
    width: 60%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
  }

  .login-btn{
    background-color: white;
    border: 1px solid #2196F3;
    border-radius: 8px;
    color: #2196F3;
    width: 60%;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
  }

  .app-img{
    width: 50%;
    height: 50%;
  }
`;

function Home () {
    return (
        <Section>
            <img src={phone} alt='better professor app' className='app-img' />
            <div className='homepage'>
            <div className='homepage-pitch'>
                <h2>Never miss another deadline again!</h2>
                <p>Managing multiple projects with numerous deadlines for 
                a myriad of students can be a hassle for even the most
                organized teacher. Streamline the process now with Better Professor.</p>
            </div>
            <Link to='/SignUp'><button className='signup-btn'>Sign Up</button></Link>
            <Link to='/Login'><button className='login-btn'>Log In</button></Link>
            </div>
        </Section>
    )
}

export default Home;