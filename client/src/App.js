import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import Home from './pages/Home'
import Calendar from './Components/Calendar'
import Signup from './pages/signUp'
import Workouts from './pages/Workouts'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const client = new ApolloClient({
  uri: '/graphql',
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
            path="/calendar"
            element={<Calendar />}
          />
          <Route
            path="/workout/:id"
            element={<Workouts />}
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
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
