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

  return (
    <section className='destination-page-container'>
      <h4 className='subheading1 pick-destination'>
        <span>01</span> pick your destination
      </h4>
      <div className='destination-page-inner-container'>
        <article className='img-container'>
          <img className='destination-img' src={img} alt='destination' />
        </article>
        <article className='destination-info-container'>
          <div className='btns-container'>
            {buttons.map((b, index) => {
              return (
                <button
                  className={
                    b === name
                      ? 'destination-btn active-destination-btn'
                      : 'destination-btn'
                  }
                  key={index}
                  onClick={() => setActiveDestination(destinations[index])}
                >
                  <h5 className='destination-btns-text'>{b}</h5>
                </button>
              );
            })}
          </div>
          <h2>{name}</h2>
          <p className='destination-description'>{description}</p>
          <div className='destination-line'></div>
          <div className='distance-time-container'>
            <div className='distance-container'>
              <p className='subheading2 distance-container-text1'>
                avg. distance
              </p>
              <p className='subheading1 distance-container-text2'>{distance}</p>
            </div>
            <div className='time-container'>
              <p className='subheading2 distance-container-text1'>
                est. travel time
              </p>
              <p className='subheading1 distance-container-text2'>{travel}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DestinationPage;
