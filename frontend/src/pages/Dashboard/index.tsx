import React, { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { AuthContext } from '../../context/auth';
import formatDate from '../../utils/formatDate';

import SignIn from '../SignIn';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <SignIn />;
  }

  return (
    <Container>
      <Content>
        <button type="button">
          <FiChevronLeft size={24} />
          <p>Sign out</p>
        </button>
        <ul>
          <header>
            <div>
              <p>Profile</p>
              <span>Some info may be visible to other people</span>
            </div>
            <button type="button">Edit</button>
          </header>
          <li>
            <span>NAME</span>
            <p>{user.name}</p>
          </li>
          <li>
            <span>EMAIL</span>
            <p>{user.email}</p>
          </li>
          <li>
            <span>MEMBER SINCE</span>
            <p>{formatDate(user.created_at)}</p>
          </li>
        </ul>
        <footer>
          <p>Guilherme</p>
          <p>devchallenges.io</p>
        </footer>
      </Content>
    </Container>
  );
};

export default Dashboard;
