import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import  { Header }  from './components/header/header.component';

import  Home  from './components/Home/home.component';
import  NewPost  from './components/newPost/NewPost.component';


import './App.css';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className='App'>
          <div className='header'>
            <Header />
          </div>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/new-post" component={NewPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
