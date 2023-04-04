import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
     <SectionTitle main center>
        Hello <br />
        Welcome to my Portfolio
     </SectionTitle>
     <SectionText>
        The purpose of this website is to showcase my skills to potential employers in a nice and attractive way
     </SectionText>
     <Button onclick={() => window.location="https://www.google.com"}>Learn More</Button>
     </LeftSection>
  </Section>
);

export default Hero;