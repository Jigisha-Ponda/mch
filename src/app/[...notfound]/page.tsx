 
import ErrorPage from '@/components/error';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "404 Page",
};
const index = () => {
  return (
    <Wrapper>
      <ErrorPage />
    </Wrapper>
  );
};

export default index;