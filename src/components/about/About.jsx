import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutCard = ({ icon, title, subtitle }) => (
  <article className="about__card">
    {icon}
    <h5>{title}</h5>
    <small>{subtitle}</small>
  </article>
);

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="A photo of me working on a computer." />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard icon={<FaAward className="about__icon" />} title="Experience" subtitle="5+ Years Working" />
            <AboutCard icon={<FiUsers className="about__icon" />} title="Clients" subtitle="1" />
            <AboutCard icon={<VscFolderLibrary className="about__icon" />} title="Projects" subtitle="15" />
          </div>
          <p>
            Welcome to my digital universe, a place where bits and pixels come together to create a web of wonders! Explore
            my virtual playground, where I tinker with tech, dance with data, and surf the digital waves. From coding capers
            to data divination, this site is a treasure trove of my digital adventures. Just like a good book, you can't
            judge a website by its cover, so come on in and flip through the pages of my digital diary. You might just find
            a byte-sized surprise around every corner. Grab your virtual surfboard and ride the web with me. I'll see you on
            the other side!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
