import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const UpdateUser: React.FC = () => {
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
          <form>
            <label htmlFor="name">
              <span>Name</span>
              <input id="name" type="text" placeholder="Enter your name..." />
            </label>
            <label htmlFor="name">
              <span>Email</span>
              <input id="name" type="email" placeholder="Enter your email..." />
            </label>
            <label htmlFor="name">
              <span>Password</span>
              <input
                id="text"
                type="text"
                placeholder="Enter your password..."
              />
            </label>
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
