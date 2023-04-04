import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
   <Section id="tech">
   <SectionDivider />
   <SectionTitle>Technologies</SectionTitle> 
   <SectionText>
       Nam et justo nec elit ultrices imperdiet. Morbi vel auctor lacus. In hac habitasse platea dictumst. Etiam leo augue, molestie sit amet mattis ac, suscipit vel sem. 
   </SectionText>
   <List>
   <ListItem>
     <DiFirebase size='3rem' />
      <ListContainer>
     <ListTitle>Front End</ListTitle>
     <ListParagraph>
        Nullam commodo odio massa, id vulputate nisi dignissim nec. Proin porta libero a elit varius sagittis eget ac ipsum. Phasellus sed mattis augue.
     </ListParagraph>
          </ListContainer>
          </ListItem>
          <ListItem>
     <DiFirebase size='3rem' />
      <ListContainer>
     <ListTitle>Front End</ListTitle>
     <ListParagraph>
        Nullam commodo odio massa, id vulputate nisi dignissim nec. Proin porta libero a elit varius sagittis eget ac ipsum. Phasellus sed mattis augue.
     </ListParagraph>
          </ListContainer>
          </ListItem>
          <ListItem>
     <DiFirebase size='3rem' />
      <ListContainer>
     <ListTitle>Front End</ListTitle>
     <ListParagraph>
        Nullam commodo odio massa, id vulputate nisi dignissim nec. Proin porta libero a elit varius sagittis eget ac ipsum. Phasellus sed mattis augue.
     </ListParagraph>
          </ListContainer>
          </ListItem>
     </List>

   </Section>
);

export default Technologies;
 