import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
  }
}
  
  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot=> {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    return (
      <div>
        <h1 className='text-center text-7xl text-purple-900  my-4'>RoboFriends</h1>
        <Searchbox searchChange={this.onsearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );

  }
}
export default App;
