
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Appoinment from '@/components/appoinment';

export const metadata = {
  title: "Appointment",
};

const index = () => {
  return (
    <Wrapper>
      <Appoinment />
    </Wrapper>
  );
};

export default index;