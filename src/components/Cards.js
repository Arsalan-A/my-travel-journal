import React from 'react';
import '../styles/card.css';
import pinpoint from '../images/pinpoint.png';
import mountFuji from '../images/mount-fuji.jpg';

function Cards(props) {
  const {
    description,
    endDate,
    googleMapsUrl,
    imageUrl,
    location,
    startDate,
    title,
  } = props;
  return (
    <div className='card-container'>
      <div className='card'>
        <img className='card-cover-img' src={imageUrl} alt={imageUrl} />
        <div className='card-info'>
          <img src={pinpoint} alt='pinpoint logo' />
          <span>{location}</span>
          <a href={googleMapsUrl} target='_blank'>
            View on Google Maps
          </a>
          <h1>{title}</h1>
          <p className='card-date'>
            {startDate} - {endDate}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
