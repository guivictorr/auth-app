import styled from 'styled-components';

export const UpdateContainer = styled.div`
  background-color: #252329;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UpdateContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-bottom: 20px;
    background-color: transparent;
    color: #2f80ed;
    font-size: 16px;
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

  section {
    border: 1px solid #bdbdbd;
    border-radius: 12px;
    width: 830px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 35px 0 35px 50px;

    header {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;

      p {
        color: #e0e0e0;
        font-size: 24px;
      }

      span {
        font-size: 13px;
        color: #828282;
      }
    }
  }

  form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 34px;

    label {
      width: 420px;
      height: 75px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      & + label {
        margin-top: 24px;
      }

      span {
        color: #e0e0e0;
        font-size: 14px;
        margin-bottom: 4px;
      }

      input {
        flex: 1;
        width: 100%;
        border-radius: 12px;
        border: 1px solid #bdbdbd;
        background-color: transparent;
        padding: 17px;
        color: #e0e0e0;
        font-size: 16px;

        &::placeholder {
          color: #828282;
          font-size: 16px;
        }
      }
    }

    button {
      width: 82px;
      height: 38px;
      background-color: #2f80ed;
      color: #f5f5f5;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      margin-top: 24px;
      cursor: pointer;
    }

    .error {
      color: #fc4e3f;
      margin-top: 15px;
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
