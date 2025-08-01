
import Home from '@/components/homes/home';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Home | MCH Hospital",
};


const index = () => {
  return (
    <Wrapper>
      <Home />      
    </Wrapper>
  );
};

export default index;