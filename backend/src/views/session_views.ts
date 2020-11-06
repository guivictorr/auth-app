import User from '../models/User';

interface SessionResponse {
  token: string;
  user: User;
}

export default {
  render(response: SessionResponse) {
    const {
      token,
      user: { name, email, id, created_at },
    } = response;

    return {
      token,
      user: {
        name,
        email,
        id,
        created_at,
      },
    };
  },
};
