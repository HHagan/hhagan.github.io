import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [  
  {
    id: 1,
    image: IMG1,
    title: 'Example Portfolio Item Title',

  },
  {
    id: 2,
    image: IMG2,
    title: 'Example Portfolio Item Title', 

  },
  {
    id: 3,
    image: IMG3,
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
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mock</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            </div>
          </article>
            ) 
            })
        }
        </div>                  
    </section>
  )
}
export default Portfolio;