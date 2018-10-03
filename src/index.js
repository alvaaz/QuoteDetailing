import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjlwqnow603bo01gp1ub4hgoc/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:700');
  body {
      padding: 0;
      margin: 0;
      font-family: 'Raleway', sans-serif;
  }
`

const theme = {
  main: "#FF1744",
  success: "#6EC10A",
  mainSoft: "#FCD4D4",
  dark: "#313442",
  darkSoft: "#ADB1C1"
}

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </Router>, document.getElementById('root')
  )
  registerServiceWorker()