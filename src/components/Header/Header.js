import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
  <Link 
  style ={{
    color: "white",
    display: "flex",
    alignItems: "center",
    marginBottom: "20",
  }} href="/">
        <DiCssdeck size="3rem"/><Span>Simplex</Span>
  </Link>
  </Div1>
  <Div2>
     <li>
         <Link href="#projects">
              <NavLink>
                Projects
              </NavLink>  
         </Link>
     </li>
      <li>
         <Link href="#tech">
              <NavLink>
                Technologies
              </NavLink>  
         </Link>
     </li>
      <li>
         <Link href="#about">
              <NavLink>
                About
              </NavLink>  
         </Link>
     </li>
  </Div2>  
  <Div3>
  <SocialIcons href="https://www.https://github.com/Eriq-code"> 
  <AiFillGithub size="3rem" />   
  </SocialIcons>
  <SocialIcons href="https://www.linkedin.com">
  <AiFillLinkedin size="3rem" />   
  </SocialIcons>
  <SocialIcons href="https://www.instagram.com">
  <AiFillInstagram size="3rem" />   
  </SocialIcons>
  </Div3> 
  </Container>
);

export default Header;
