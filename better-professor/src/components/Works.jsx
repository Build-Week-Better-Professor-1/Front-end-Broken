import React from 'react';
import styled from 'styled-components';
import chart from '../img/chart.jpg';

const WorkSection = styled.section`
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
    margin: 6% 1%;
  }

  p {
    font-size: 1.5rem;
    margin: 0% 1%;
  }

  .works-pitch{
	display:flex;
	flex-direction:column;
    justify-content:flex-start;
    padding: 0 2%;
    width: 80%;
  }

  .chart-img{
    width: 50%;
    height: 50%;
  }
`;

function Works () {
    return (
        <WorkSection>
            <img src={chart} alt='better professor app' className='chart-img' />
            <div className='works'>
                <div className='works-pitch'>
                    <h2>How It Works</h2>
                    <p>Better Professor allows you to better organize, manage, and remind not just your students, but yourself.<br /> <br />
			        Find the students that you are mentoring, and keep track of their progress on their assignments, projects, and research.<br /> <br />
	 		        Create unique due dates that will automatically remind you and your students, when something is coming up or due with automated or custom messages!<br /> <br />
			        Never miss an opportunity to mentor again!</p>
                </div>
            </div>
        </WorkSection>
    )
}

export default Works;