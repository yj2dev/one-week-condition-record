import styled from "styled-components";

export const Container = styled.div`
  ul {
    margin: 0;
    padding: 0;

    li {
      padding: 4px 0;
      font-size: 1.2em;
      display: flex;
      justify-content: space-between;
      list-style: none;
      align-items: center;

      &.active {
        background: rgba(0, 0, 0, 0.1);
      }

      &:last-child {
        padding-bottom: 0;
      }

      p.day-of-week {
        padding: 0;
        margin: 0;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 0.7em;
          color: #767676;
        }
      }

      .update-btn-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;

        a {
          text-decoration: none;
          font-size: 14px;
          padding: 4px 24px;
          color: #000;
          transition: 0.1s;

          &:hover {
            color: #fff;
            background-color: rgba(0, 0, 0, 1);
          }
        }
      }
    }
  }
`;
