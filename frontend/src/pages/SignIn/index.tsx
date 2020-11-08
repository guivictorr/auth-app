import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import Input from '../../components/Input';

import { Container, Content, Form } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h2>Login</h2>
          <Input type="email" icon={MdEmail} placeholder="Email" />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <p>Dont have account yet? Register</p>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
