import React from 'react';

export default function Contact() {
  return (
    <div className="contact-styles">
            <h2>Contact Me</h2>
              <i className="fas fa-envelope-open-text"> Email</i>
            <div><a href="mailto:b.cl.jarrett@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer"></a></div>
            <i className="fab fa-linkedin"> Linked In</i>
            <div><a href="https://www.linkedin.com/in/ben-jarrett-2a5613198/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer"></a></div>
            <i className="fab fa-github"> Github</i>
            <div><a href="https://github.com/BenJarrett" id="github" className="nav-link" target="_blank" rel="noreferrer"></a></div>
           </div>
  );
}
