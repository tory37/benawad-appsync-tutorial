import React from "react";
import ReactDOM from "react-dom";
import AWSAppSyncClient from "aws-appsync";
import AppSyncConfig from "./aws-exports";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthOptions, AUTH_TYPE } from "aws-appsync-auth-link";

const client = new AWSAppSyncClient({
  disableOffline: true,
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSyncConfig.aws_appsync_apiKey
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
