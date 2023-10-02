import React from 'react';
import { Footer, Nav } from '../components/layout';
import { Property } from '../components/property';

type Props = {};

const PropertyScreen = (props: Props) => {
  return (
    <div>
      <Nav />
      <Property />
      <Footer />
    </div>
  );
};

export default PropertyScreen;
