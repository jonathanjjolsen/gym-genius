import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

import Home from './pages/Home'
import Signup from './pages/signUp'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/categories"
              element={<Categories />}
            />
            <Route
              path="/signUp"
              element={<Signup />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
            <Route
              path="/Profile"
              element={<Profile />}
            />
          </Routes>
        {/* </div> */}
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
