import HomeFive from '@/components/homes/home-5';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Home",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  );
};

export default HomeMain;