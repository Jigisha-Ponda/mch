
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Appointment from '@/components/appointment';

export const metadata = {
  title: "Appointment",
};

const index = () => {
  return (
    <Wrapper>
      <Appointment />
    </Wrapper>
  );
};

export default index;