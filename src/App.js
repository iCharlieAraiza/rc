import React, { Component } from 'react';
import "./App.css"

import Wrapper from './components/wrapper';

//import MyInfo from './components/example_1/example_1';
import Header from './components/example_1/header';
import Footer from './components/example_1/footer'

import List from './components/todo/List'
import Time from './components/Time/Time'

import ContactList from './components/Contact/ContactList';
import Jokes from './components/Jokes/JokesList'

import Products from './components/Products/Products'

class App extends Component {
  render() {
    return (
      <Wrapper>
          <Header title="This is the header"></Header>
          <List></List>
          <Time></Time>
          <ContactList></ContactList>
          <Jokes></Jokes>
          <Products></Products>
          <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
