import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5407388937547!2d3.910946914724789!3d7.624844494502292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039e531b853f495%3A0xd1dae36267e24f83!2sKolaDaisi+University+Ibadan!5e0!3m2!1sen!2sng!4v1544195417167"
       width="100%" 
       height="500" 
       frameBorder="0" 
       allowFullScreen></iframe>

       <div className="location_tag">
        <div>Location</div>

       </div>

    </div>
  );
};

export default Location;