import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const PaginationButton = styled(Link)`
  /* border: 1px solid #000; */
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
`;
