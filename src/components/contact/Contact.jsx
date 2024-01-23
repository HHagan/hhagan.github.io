import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
  try {
    const result = await emailjs.sendForm('service_u8q5gcq', 'template_zbtln7o', formData, '3fYDZ8YKCXAgy-Egx');
    console.log(result.text);
  } catch (error) {
    console.error('Error sending email:', error);
   
  }
};

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(form.current);
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>diaqueheather@gmail.com</h5>
            <a href='mailto:diaqueheather@gmail.com'>Send a message</a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;