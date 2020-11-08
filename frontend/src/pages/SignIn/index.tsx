import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import { AuthContext } from '../../context/auth';

import { Container, Content, Form } from './styles';

interface ModelProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn, user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [model, setModel] = useState<ModelProps>({
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [event.target.name]: event.target.value,
      });
    },
    [model, signIn],
  );

  const handleSubmit = useCallback(
    async (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        await signIn(model);
        setError('');
      } catch (err) {
        setError('Invalid Email/Password');
      }
    },
    [model],
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <Input
            type="email"
            icon={MdEmail}
            placeholder="Email"
            name="email"
            onChange={updateModel}
            value={model.email}
            required
          />
          <Input
            type="password"
            isPassword
            icon={MdLock}
            placeholder="Password"
            name="password"
            onChange={updateModel}
            value={model.password}
            required
          />
          {error && <span className="error">{error}</span>}
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
