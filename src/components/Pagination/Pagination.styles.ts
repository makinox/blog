import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const PaginationButton = styled(Link)<{ isDark: boolean }>`
  border: 1px solid var(--textTercColor);
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 20px;

  ${props => {
    if (props.isDark) {
      return `
      border: 1px solid rgb(var(--dark-primary));
      `;
    } else {
      return `
      border: 1px solid rgb(var(--light-primary));
      `;
    }
  }}
`;
