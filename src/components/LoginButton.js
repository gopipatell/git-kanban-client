import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

const authorizeUrl = 'https://github.com/login/oauth/authorize';
const clientId = '53b98d9a26167ec7ddb7';
const scope = '';

function LoginButton() {
  return (
    <a className="btn btn-dark all-buttons" href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>
      <FontAwesomeIcon className="mr-2" icon={['fab', 'github']} />
      Login with Github
    </a>
  );
}

export default LoginButton;
