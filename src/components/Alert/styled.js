import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const AlertWrapper = styled.div`
  position: fixed;
  background-color: rgba(9, 108, 37, 0.85);
  box-shadow: 0 4px 8px #7b7b7b;
  color: #fff;
  font-size: 1.2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  top: -100px;
  transition: 0.2s;

  &.show {
    top: 0;
  }
`;
