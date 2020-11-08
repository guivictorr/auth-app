import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content, Form } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h2>Sign In</h2>
          <Input type="email" icon={MdEmail} placeholder="Email" />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <span>
            Dont have account yet?
            <Link to="/signup">Register</Link>
          </span>
        </Form>
      </Content>
      <footer>
        <p>Guilherme</p>
        <p>devchallenges.io</p>
      </footer>
    </Container>
  );
};

export default SignIn;
