
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Events from '@/components/events';

export const metadata = {
  title: "Events",
};

const index = () => {
  return (
    <Wrapper>
      <Events />
    </Wrapper>
  );
};

export default index;