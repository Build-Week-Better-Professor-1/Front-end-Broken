import React from 'react';
import styled from 'styled-components';

const ReviewsDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    display: flex;
    flex-wrap: wrap;

    h2 {
        text-align: center;
    }
    .review {
        display: flex;
        width: 50%; 
    }
`;

function Reviews () {
    return (
        <ReviewsDiv>
            <h2>See what customers are saying about Better Professor!</h2> 
                <div className='review'>
                    <h3>Deborah S.</h3>
                    <p>This app has made my life so much easier!
					I love that I can log in and see exactly what
					deadlines my students have coming up in a glance.</p>
                </div>
                <div className='review'>
                    <h3>Sally May J.</h3>
                    <p>Wow! Just Wow!</p>
                </div>
                <div className='review'>
                    <h3>Dr. Phillip W.</h3>
                    <p>This app helps keep me at the top of my game!</p>
                </div>
                <div className='review'>
                    <h3>Millicent C.</h3>
                    <p>Where has this app been all my life?! 
					I highly recommend this to all my fellow 
					teachers out there. It makes keeping your students on 
					track such a breeze.</p>
                </div>
                <div className='review'>
                    <h3>Joe Bob D.</h3>
                    <p>A great way to stay on top of deadlines.</p>
                </div>
                <div className='review'>
                    <h3>Roberto V.</h3>
                    <p>Es una muy buena applicacion.</p>
                </div>
        </ReviewsDiv>
    )
}

export default Reviews;