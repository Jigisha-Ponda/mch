
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Gallery from '@/components/gallery';

export const metadata = {
  title: "Gallery",
};

const index = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
};

export default index;