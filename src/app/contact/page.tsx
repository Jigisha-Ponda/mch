import Contact from '@/components/contact';
import Wrapper from '@/layout/Wrapper';
import React from 'react';


export const metadata = {
  title: "Contact | MCH Hospital",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;