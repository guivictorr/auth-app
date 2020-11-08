import React from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content, Form } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h2>Sign Up</h2>
          <p>
            This is just a study project, the stored data will not be used for
            anything.
          </p>
          <Input type="text" icon={MdPerson} placeholder="Name" />
          <Input type="email" icon={MdEmail} placeholder="Email" />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <span>
            Already a member?
            <Link to="/signin">Login</Link>
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
