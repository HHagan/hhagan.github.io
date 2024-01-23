import React from 'react'
import './experience.css'
import { LuBadgeCheck } from "react-icons/lu";

const Experience = () => {
  return (
    <section id='experience'>     
      <h2>Skills Symphony</h2>
      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="experience__list">
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>HTML</p>
              <small className='text-light'>Proficient</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>CSS</p>
              <small className='text-light'>Proficient</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Javascript</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Bootstrap</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>API</p>
              <small className='text-light'>Beginner</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>React</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
          </ul>
        </article>
        {/*End of Frontend */}

        <article className="experience">
          <div className="experience__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="experience__list">
          <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Java</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Python</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>PHP</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>MySQL</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Git</p>
              <small className='text-light'>Advanced</small>
              </div>
            </li>
          </ul>
        </article>
        {/*End of Backend*/}

        <article className="experience">
          <div className="experience__head">
            <h3>Data Analytics</h3>
          </div>

          <ul className="experience__list">
          <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>R Programming</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Data Visualization</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Tableau</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>SQL</p>
              <small className='text-light'>Competent</small>
              </div>
            </li>
            <li>
              <LuBadgeCheck className="experience__list-icon"/>
              <div className="skill">
              <p>Spreadsheet</p>
              <small className='text-light'>Proficient</small>
              </div>
            </li>
          </ul>
        </article>
        {/*End of Data */}
      </div>
    </section>
  )
}
export default Experience;
