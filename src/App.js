import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';


const App = () => {
  return (
    <div>
    <h1 className='text-center text-7xl text-cyan-600 mb-4'>RoboFriends</h1>
    <Searchbox />
    <CardList robots={robots} />
  </div>
  );
}

export default App;
