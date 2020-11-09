import React from 'react';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
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
          <p>Guilherme Victor</p>
        </li>
        <li>
          <span>EMAIL</span>
          <p>guilhermevictor20@gmail.com</p>
        </li>
        <li>
          <span>MEMBER SINCE</span>
          <p>05/11/2020</p>
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
