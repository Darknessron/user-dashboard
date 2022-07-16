import React from 'react';
import {UserProvider} from '@auth0/nextjs-auth0';

/**
 * Main
 * @param {Object} Component
 * @param {Object} pageProps
 * @return {JSX.Element}
 * @constructor
 */
export default function App({Component, pageProps}) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  );
}
