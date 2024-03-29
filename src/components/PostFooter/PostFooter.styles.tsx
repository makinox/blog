import styled from 'styled-components';

export const Footer = styled.a<{ isDark: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
  text-decoration: none;

  & > div:first-of-type {
    margin-right: 20px;
  }

  ${props => {
    if (props.isDark) {
      return `
      color: rgb(var(--dark-onBackground));
      `;
    } else {
      return `
      color: rgb(var(--light-onBackground));
      `;
    }
  }}
`;

export const TagFooter = styled.div`
  margin: 30px 0;
`;

export const Subtitle = styled.h4`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 25px;
`;

export const Description = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;
