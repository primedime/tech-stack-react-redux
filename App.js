import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/components/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}


