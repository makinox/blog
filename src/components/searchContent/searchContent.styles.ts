import styled from 'styled-components';

export const SearchContainer = styled.div`
  top: 3%;
  width: 100%;
  max-width: 80%;
  min-width: 60%;
  margin-top: 2vh;
  border-radius: 5px;
  background-color: #fff;
  align-self: flex-start;

  & div.search-header {
    border-radius: 5px;
    padding: 10px;
  }

  & div.search-header h3 {
    margin: 0;
  }

  & div.search-header svg {
    cursor: pointer;
    color: #c1c1c1;
  }

  & div.search-input {
    padding: 0 10px;
    margin: 30px 0;
  }

  & div.search-input input {
    border: 1px solid #c1c1c1;
    box-sizing: border-box;
    border-radius: 5px;
    height: 35px;
    width: 100%;
    padding: 0 10px;
  }

  & div.search-content {
    padding: 0 10px;
  }

  & div.search-content span {
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
    padding: 8px 0;
    width: 100%;
  }

  & div.search-content span:last-of-type {
    border: none;
  }
`;
