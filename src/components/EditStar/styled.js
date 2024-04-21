import styled from "styled-components";
import { FaRegStar, FaStar } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section.edit-star {
    font-size: 2em;
  }

  .date {
    margin-top: 16px;
    text-align: center;
    font-size: 1.2em;

    span {
      font-size: 0.7em;
      color: #767676;
    }
  }

  button.save-btn {
    text-decoration: none;
    font-size: 20px;
    padding: 4px 24px;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    color: #000;
    transition: 0.1s;
    margin-top: 16px;

    &:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 1);
    }
  }
`;

export const FaStarIcon = styled(FaStar)`
  cursor: pointer;
  color: orange;
`;

export const FaRegStarIcon = styled(FaRegStar)`
  cursor: pointer;
  color: orange;
`;
