import React, { useState } from 'react';
import { destinations } from '../data';

function DestinationPage() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const { name, images, description, distance, travel } = activeDestination;
  const { png: img } = images;
  const buttons = destinations.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);
  console.log(buttons);

  return (
    <section className='destination-page-container'>
      <h4 className='subheading1'>
        <span>01</span> pick your destination
      </h4>
      <article className='img-container'>
        <img className='destination-img' src={img} alt='destination' />
      </article>
      <article className='destination-info-container'>
        <div className='btns-container'>
          {buttons.map((b, index) => {
            return (
              <button className='destination-btn' key={index}>
                <p className='subheading2'>{b}</p>
              </button>
            );
          })}
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className='destination-line'></div>
        <div className='distance-time-container'>
          <div className='distance-container'>
            <p className='subheading2'>avg. distance</p>
            <p className='subheading1'>{distance}</p>
          </div>
          <div className='time-container'>
            <p className='subheading2'>est. travel time</p>
            <p className='subheading1'>{travel}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default DestinationPage;
