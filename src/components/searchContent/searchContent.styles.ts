import styled from 'styled-components';

export const SearchContainer = styled.div<{ isDark: boolean }>`
  top: 3%;
  width: 100%;
  max-width: 80%;
  min-width: 60%;
  margin-top: 2vh;
  border-radius: 5px;
  align-self: flex-start;

  ${props => (props.isDark ? `background-color: rgb(var(--dark-surface));` : `background-color: rgb(var(--light-surface));`)}

  & div.search-header {
    border-radius: 5px;
    padding: 10px;
  }

  & div.search-header h3 {
    margin: 0;
  }

  & div.search-header svg {
    cursor: pointer;
    ${props => (props.isDark ? `color: rgb(var(--dark-primary));` : `color: rgb(var(--light-primary));`)}
  }

  & div.search-input {
    padding: 0 10px;
    margin: 30px 0;
  }

  & div.search-input input {
    border: 1px solid #c1c1c1;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 10px;
    height: 35px;
    width: 100%;

    ${props => (props.isDark ? `background-color: rgb(var(--dark-background));` : `background-color: rgb(var(--light-background));`)}
  }

  & div.search-content {
    padding: 0 20px;
  }

  & div.search-content span {
    cursor: pointer;
    padding: 8px 0;
    width: 100%;
  }

  & div.search-content span:hover {
    ${props => (props.isDark ? `color: rgb(var(--dark-primary));` : `color: rgb(var(--light-primary));`)}
  }

  & div.search-content span:last-of-type {
    margin-bottom: 10px;
  }
`;
