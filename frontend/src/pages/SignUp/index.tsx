import React, { ChangeEvent, useCallback, useState } from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import api from '../../service/api';

import { Container, Content, Form } from './styles';

interface ModelProps {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [model, setModel] = useState<ModelProps>({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const updateModel = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [event.target.name]: event.target.value,
      });
    },
    [model],
  );

  const handleSubmit = useCallback(
    async (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        if (model.confirmedPassword !== model.password) {
          setError('Passwords do not match');
          return;
        }

        setError('');
        await api.post('users', model);
        history.goBack();
      } catch (err) {
        setError('Email already registered');
      }
    },
    [model],
  );

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>
            This is just a study project, the stored data will not be used for
            anything.
          </p>
          <Input
            type="text"
            icon={MdPerson}
            placeholder="Name"
            value={model.name}
            name="name"
            onChange={updateModel}
            required
          />
          <Input
            type="email"
            icon={MdEmail}
            placeholder="Email"
            value={model.email}
            name="email"
            onChange={updateModel}
            required
          />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Password"
            value={model.password}
            name="password"
            required
            onChange={updateModel}
          />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Confirm your password"
            value={model.confirmedPassword}
            name="confirmedPassword"
            required
            onChange={updateModel}
          />
          {error && <span className="error">{error}</span>}
          <button type="submit">Login</button>
          <span>
            Already a member?
            <Link to="/">Login</Link>
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
