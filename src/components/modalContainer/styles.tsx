import styled from 'styled-components';

interface ItemProps {
  readonly full: boolean;
}

export const ModalContainer = styled.section<ItemProps>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  ${(p: any) => (p.full ? 'backdrop-filter: blur(2px);' : '')};
  ${(p: any) => (p.full ? 'background-color: rgba(0,0,0,.1);' : '')};
  ${(p: any) => (p.full ? 'top: 0' : '')};
  ${(p: any) => (p.full ? 'left: 0' : '')};
  ${(p: any) => (p.full ? 'right: 0' : 'right: 20px')};
  bottom: 0;
  z-index: 3;
`;

export const WhiteSpace = styled.div`
  background-color: #fff;
  padding: 100px;
`;
