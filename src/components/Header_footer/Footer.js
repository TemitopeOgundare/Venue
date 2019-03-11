import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
  return (
   <footer className="bck_red">
    <Fade delay={500}>
      <div className="foter_logo_venue">
          The Venue
      </div>
      <div className="footer_copyright">
        My First react project. ALl rights reserved.
      </div>

    </Fade>

   </footer>
  );
};

export default Footer;