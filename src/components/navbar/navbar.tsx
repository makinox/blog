import React from 'react';
import { Nav, InputContainer, Input, Logo, LogoWrapper } from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/Blog.svg" }) {
        publicURL
      }
    }
  `);
  const handleInput = e => console.log(e.target.value);

  return (
    <Nav>
      <LogoWrapper to="/">
        <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
      </LogoWrapper>
      <InputContainer>
        <Input placeholder="Buscar" type="text" onChange={handleInput} />
      </InputContainer>
    </Nav>
  );
};
