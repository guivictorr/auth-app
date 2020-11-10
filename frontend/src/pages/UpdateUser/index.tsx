import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

import api from '../../service/api';

import { Container, Content } from './styles';

interface ModelProps {
  name: string;
  email: string;
  password: string;
}

const UpdateUser: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const { user, token, signOut } = useContext(AuthContext);
  const [model, setModel] = useState<ModelProps>({
    name: '',
    email: '',
    password: '',
  });

  const handleUpdateModel = useCallback(
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
        await api.put(`users/${user.id}`, model, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        signOut();
      } catch (err) {
        setError('Email already registered');
      }
    },
    [model],
  );

  if (!user) {
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <FiChevronLeft size={24} />
          <p>Back</p>
        </Link>
        <section>
          <header>
            <p>Change Info</p>
            <span>Changes will be reflected to every services</span>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <span>Name</span>
              <input
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={model.name}
                name="name"
                onChange={handleUpdateModel}
                required
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                type="email"
                placeholder="Enter your email..."
                value={model.email}
                name="email"
                onChange={handleUpdateModel}
                required
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                type="password"
                placeholder="Enter your password..."
                value={model.password}
                name="password"
                onChange={handleUpdateModel}
                required
              />
            </label>
            {error && <p className="error">{error}</p>}
            <button type="submit">Save</button>
          </form>
        </section>
        <footer>
          <p>Guilherme</p>
          <p>devchallenges.io</p>
        </footer>
      </Content>
    </Container>
  );
};

export default UpdateUser;
