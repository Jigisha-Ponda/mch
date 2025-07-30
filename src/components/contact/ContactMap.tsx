
import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="map-area">
        <div id="contact-map" className="contact-map">
          <div style={{ width: '100%', }}>
            <iframe
              title="Contact"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28654.96671525379!2d85.354734!3d26.135754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed110b6d1b518d%3A0x713c34c52921d352!2sMUZAFFARPUR%20CHILDREN%20HOSPITAL!5e0!3m2!1sen!2sin!4v1753875882614!5m2!1sen!2sin"
              style={{ width: '100%' }}
              height={672}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;