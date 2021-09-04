import styled from 'styled-components';

export const SearchContainer = styled.div`
  top: 3%;
  margin-top: -45vh;
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  max-width: 90%;

  & div.search-header {
    border-radius: 5px;
    padding: 10px;
  }

  & div.search-header h3 {
    margin: 0;
  }

  & div.search-header svg {
    cursor: pointer;
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
`;
