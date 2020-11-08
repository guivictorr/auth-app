import styled from 'styled-components';

export const Container = styled.div`
  background-color: #252329;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin-top: 5px;
    color: #bdbdbd;
    font-size: 12px;
  }
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  width: 400px;
  padding: 24px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  color: #e0e0e0;

  button {
    width: 350px;
    height: 38px;
    border: none;
    color: #f5f5f5;
    font-size: 16px;
    cursor: pointer;
    background: #2f80ed;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  h2 {
    align-self: flex-start;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
    margin-bottom: 35px;
  }

  span {
    color: #828282;
    font-size: 14px;
    a {
      text-decoration: none;
      color: #2f80ed;
      margin-left: 5px;
    }
  }

  div + div {
    margin-top: 15px;
  }
`;
