import Home from '@/components/homes/home';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "MCH Hospital",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default HomeMain;