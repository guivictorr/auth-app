import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import formatDate from '../../utils/formatDate';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Content>
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
      </Content>
      <footer>
        <p>Guilherme</p>
        <p>devchallenges.io</p>
      </footer>
    </Container>
  );
};

export default Dashboard;
