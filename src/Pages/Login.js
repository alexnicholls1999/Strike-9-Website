import LoginTemplate from '../Components/Templates/LoginTemplate';
import withRedirectUser from '../HOC/withRedirectUser';

function Login({ signInEmailUser }) {
  return (
    <LoginTemplate
      loginContent={{
        title: 'WELCOME BACK',
        paragraph: 'Log In',
      }}
      signInEmailUser={signInEmailUser}
    />
  );
}

export default withRedirectUser(Login);
