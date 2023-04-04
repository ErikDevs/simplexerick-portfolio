import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

    <LinkList>
      
     <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href="tel:079770074">+254-79 770074</LinkItem>
     </LinkColumn>
     <LinkColumn>
         <LinkTitle>E-mail</LinkTitle>
         <LinkItem href="mailto:kamaueric821@gmail.com">info@kamaueric.com</LinkItem>
     </LinkColumn>

    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
      <Slogan>New innovation day by day </Slogan>
      </CompanyContainer>
      <SocialIcons href="https://www.https://github.com/Eriq-code"> 
          <AiFillGithub size="3rem" />   
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com">
          <AiFillLinkedin size="3rem" />   
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com">
          <AiFillInstagram size="3rem" />   
      </SocialIcons>
    </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
