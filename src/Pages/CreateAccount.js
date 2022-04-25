import React from 'react';
import CreateAccountTemplate from '../Components/Templates/CreateAccountTemplate';
import withRedirectUser from '../HOC/withRedirectUser';

function CreateAccount({ createEmailUser }) {
  return (
    <CreateAccountTemplate
      createEmailUser={createEmailUser}
      createAccountContent={{
        title: 'CREATE ACCOUNT',
        paragraph: 'Create Account',
      }}
    />
  );
}

export default withRedirectUser(CreateAccount);
