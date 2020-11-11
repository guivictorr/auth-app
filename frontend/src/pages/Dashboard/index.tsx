import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { AuthContext } from '../../context/auth';
import formatDate from '../../utils/formatDate';

import SignIn from '../SignIn';

import { DashBoardContainer, DashBoardContent } from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  if (!user) {
    return <SignIn />;
  }

  return (
    <DashBoardContainer>
      <DashBoardContent>
        <button type="button" onClick={handleSignOut}>
          <FiChevronLeft size={24} />
          <p>Sign out</p>
        </button>
        <ul>
          <header>
            <div>
              <p>Profile</p>
              <span>Some info may be visible to other people</span>
            </div>
            <Link to="/update/user">Edit</Link>
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
      </DashBoardContent>
    </DashBoardContainer>
  );
};

export default Dashboard;
