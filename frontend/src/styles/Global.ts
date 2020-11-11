import { createGlobalStyle } from 'styled-components';
import {
  SignInForm,
  SignInContainer,
  SignInContent,
} from '../pages/SignIn/styles';
import {
  SignUpContainer,
  SignUpContent,
  SignUpForm,
} from '../pages/SignUp/styles';
import { DashBoardContent } from '../pages/Dashboard/styles';
import { UpdateContent } from '../pages/UpdateUser/styles';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: transparent;
  }

  body,html,#root {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
  }

  @media (max-width: 870px) {
    div${SignInContainer} {
      footer {
        padding: 0 20px;
        position: absolute;
        bottom: 20px;
      }
    }

    main${SignInContent} {
      border: 0;
      padding: 0;
      width: 100%;
    }

    form${SignInForm} {
      width: 85%;

      button {
        width: 100%;
      }
    }

    div${SignUpContainer} {
      footer {
        padding: 0 20px;
        position: absolute;
        bottom: 20px;
      }
    }

    main${SignUpContent} {
      border: 0;
      padding: 0;
      width: 100%;
    }

    form${SignUpForm} {
      width: 85%;

      button {
        width: 100%;
      }
    }

    main${DashBoardContent} {
      width: 100%;

      ul {
        border: 0;
        width: 100%;

        header {
          padding: 0 20px;
          margin-bottom: 30px;
        }

        li {
          padding: 30px 20px;
          border-top: 0;
          border-bottom: 1px solid #bdbdbd;
        }
      }

      footer {
        padding: 0 20px;
        position: absolute;
        bottom: 20px;
      }
    }

    main${UpdateContent} {
      width: 100%;

      section {
        border: 0;
        width: 100%;
        padding: 0 20px;

        label {
          width: 100%;
        }
      }

      footer {
        padding: 0 20px;
        position: absolute;
        bottom: 20px;
      }
    }
  }
`;
