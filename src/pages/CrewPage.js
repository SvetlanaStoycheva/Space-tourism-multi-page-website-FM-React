import React, { useState } from 'react';
import { crew } from '../data';

const CrewPage = () => {
  const [activeMemeber, setActiveMember] = useState(crew[0]);
  const { name, role, images, bio, id } = activeMemeber;
  const { png: img } = images;
  const buttons = crew.reduce((acc, curr) => {
    acc.push(curr.id);
    return acc;
  }, []);

  return (
    <section className='crew-page-container'>
      <h4 className='subheading1 meet-crew'>
        <span>02</span> meet your crew
      </h4>
      <div className='crew-page-inner-container'>
        <article className='crew-page-img-container'>
          <img className='crew-img' src={img} alt='crew' />
        </article>
        <div className='crew-line'></div>
        <article className='crew-info-container'>
          {/* buttons small screen */}
          <div className='crew-btns-container-small-screen'>
            {buttons.map((b, index) => {
              return (
                <button
                  className={b === id ? 'crew-btn active-crew-btn' : 'crew-btn'}
                  key={index}
                  onClick={() => setActiveMember(crew[index])}
                >
                  {b}
                </button>
              );
            })}
          </div>
          <p className='crew-role subheading1'>{role}</p>
          <h4 className='crew-page-name'>{name}</h4>
          <p className='crew-bio'>{bio}</p>
          {/* buttons big screen */}
          <div className='crew-btns-container-big-screen'>
            {buttons.map((b, index) => {
              return (
                <button
                  className={b === id ? 'crew-btn active-crew-btn' : 'crew-btn'}
                  key={index}
                  onClick={() => setActiveMember(crew[index])}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CrewPage;
