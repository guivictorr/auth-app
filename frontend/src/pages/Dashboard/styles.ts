import styled from 'styled-components';

export const DashBoardContainer = styled.div`
  background-color: #252329;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DashBoardContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    border: none;
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 6px;
    background-color: transparent;
    color: #2f80ed;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      margin-left: 5px;
      svg {
        opacity: 1;
        transform: translateX(0);
      }
    }

    svg {
      transition: all 0.2s ease;
      opacity: 0;
      transform: translateX(5px);
    }
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #bdbdbd;
    border-radius: 24px;
    width: 845px;
    list-style: none;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 50px;

      div {
        p {
          color: #e0e0e0;
          font-size: 24px;
        }

        span {
          font-size: 13px;
          color: #828282;
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        width: 95px;
        height: 38px;
        background-color: transparent;
        color: #e0e0e0;
        font-size: 16px;
        transition: all 0.2s ease;

        &:hover {
          background-color: #e0e0e0;
          color: #000000;
        }
      }
    }

    li {
      padding: 30px 50px;
      display: flex;
      align-items: center;
      border-top: 1px solid #bdbdbd;
      width: 100%;

      span {
        width: 280px;
        color: #828282;
        font-size: 14px;
      }

      p {
        color: #e0e0e0;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 845px;
    width: 100%;
    margin-top: 5px;
    color: #bdbdbd;
    font-size: 12px;
  }
`;
