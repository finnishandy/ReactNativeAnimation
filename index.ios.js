import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import Reactotron from 'reactotron';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry, Text } from 'react-native';

import Playground from './src/Playground';


let currentRoute =  function(state = {foo: true}, action) {
  switch (action.type) {
    case 'foo':
      return {foo: !state.foo };
    default:
      return state;
  }
}

let previousRoute =  function(state = {bar: true}, action) {
  switch (action.type) {
    case 'bar':
      return {bar: !state.bar };
    default:
      return state;
  }
}

const store = createStore(combineReducers({currentRoute, previousRoute}));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

Reactotron.addReduxStore(store);
Reactotron.connect({ enabled: __DEV__ });



AppRegistry.registerComponent('RoutingExample', () => () => (
  <Provider store={store}>
    <Playground />
  </Provider>
));
