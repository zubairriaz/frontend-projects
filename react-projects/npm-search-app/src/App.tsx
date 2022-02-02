import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store'
import RepositoriesList from './components/RepositoriesList';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RepositoriesList></RepositoriesList>
      
    </div>
    </Provider>
  );
}

export default App;
