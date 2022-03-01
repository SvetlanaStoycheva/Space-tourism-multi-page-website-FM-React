import React, { useState } from 'react';
import { technology } from '../data';

const TechnologyPage = () => {
  const [activeTechnology, setActiveTechnology] = useState(technology[0]);
  const { name, description, images, id } = activeTechnology;
  const { portrait, landscape } = images;
  const buttons = technology.reduce((acc, curr) => {
    acc.push(curr.id);
    return acc;
  }, []);

  return (
    <section className='technology-page-container'>
      <h4 className='subheading1 space-launch'>
        <span>03</span> space launch 101
      </h4>
      <div className='technology-page-inner-container'>
        <article className='technology-page-img-container'>
          <img
            className='technology-img-landscape'
            src={landscape}
            alt='technology'
          />
          <img
            className='technology-img-portrait'
            src={portrait}
            alt='technology'
          />
        </article>
        {/* info container */}
        <article className='technology-info-container'>
          <div className='technology-btns-container'>
            {buttons.map((b, index) => {
              return (
                <button
                  className={
                    b === id
                      ? 'technology-btn active-technology-btn'
                      : 'technology-btn'
                  }
                  key={index}
                  onClick={() => setActiveTechnology(technology[index])}
                >
                  <p className='technology-btn-number'>{b}</p>
                </button>
              );
            })}
          </div>
          <div className='technology-inner-text-container'>
            <p className='technology-role subheading1'>THE TERMINOLOGY ...</p>
            <h4 className='technology-page-name'>{name}</h4>
            <p className='technology-bio'>{description}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TechnologyPage;
