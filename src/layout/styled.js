import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
  padding: 24px 24px 48px 24px;
  box-shadow: 4px 4px 12px #5f5f5f;

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }

  section.btn-container {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    padding-top: 12px;
    button {
      font-size: 1.4em;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.1s;
      width: 42px;
      height: 42px;
      border-radius: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
      }

      &.back {
        position: relative;
        &::before {
          position: absolute;
          content: "일주일 전 컨디션";
          display: none;
          top: -24px;
          white-space: nowrap;
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 0.5em;
          background: #393d40;
          color: #fff;
        }
        &:hover::before {
          display: block;
        }
      }
      &.now {
        position: relative;
        &::before {
          position: absolute;
          content: "오늘의 컨디션";
          display: none;
          top: -24px;
          white-space: nowrap;
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 0.5em;
          background: #393d40;
          color: #fff;
        }
        &:hover::before {
          display: block;
        }
      }
      &.forward {
        position: relative;
        &::before {
          position: absolute;
          content: "일주일 후 컨디션";
          display: none;
          top: -24px;
          white-space: nowrap;
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 0.5em;
          background: #393d40;
          color: #fff;
        }
        &:hover::before {
          display: block;
        }
      }
    }
  }
`;
