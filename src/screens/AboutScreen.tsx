import React from 'react';
import { Footer, Nav } from '../components/layout';
import { About } from '../components/about';

type Props = {};

const AboutScreen = (props: Props) => {
  return (
    <div>
      <Nav />

      <About />
      <Footer />
    </div>
  );
};

export default AboutScreen;
