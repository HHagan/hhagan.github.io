import React from 'react';
import { FaGithub } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import './portfolio.css';
import IMG1 from '../../assets/portfolio.gif';
import IMG2 from '../../assets/weather-app.gif';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Portfolio',
    url1: 'https://github.com/HHagan/hhagan.github.io',
    url2: 'https://hhagan.github.io/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'React Weather APP',
    url: 'https://github.com/HHagan/react-weather-app',
    url2: 'https://hhagan.github.io/react-weather-app/',
  },
  {
    id: 3,
    image: IMG6,
    title: 'Example Portfolio Item Title',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Example Portfolio Item Title',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Example Portfolio Item Title',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Example Portfolio Item Title',
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, url1, url2 }) => (
          <div key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div>
              <a href={url1} target='_blank' rel='noopener noreferrer' className='icon-link'>
                <FaGithub size={32} />
              </a>
              <a href={url2} target='_blank' rel='noopener noreferrer' className='icon-link'>
                <BsCollectionPlay size={32} /> {/* Adjust size as needed */}
              </a>
            </div>
          </div>              
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
