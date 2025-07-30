import HomeFive from '@/components/homes/home-5';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Main Home MediDove React Next js Tempalte",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  );
};

export default HomeMain;