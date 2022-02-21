import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className='home-page-container'>
      <article className='home-page-text-container'>
        <h5>So, you want to travel to</h5>
        <h2>Space</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <article className='home-page-btn'>
        <Link to='/destination'>
          <button type='button' className='explore-btn'>
            EXPLORE
          </button>
        </Link>
      </article>
    </section>
  );
}

export default HomePage;
