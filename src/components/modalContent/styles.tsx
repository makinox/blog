import styled from 'styled-components';
import { RiCloseCircleLine } from 'react-icons/ri';

export const ModalContent = styled.section`
  background-color: #fff;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  border-radius: 10px;
  padding: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  cursor: pointer;
  font-size: 25px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;
