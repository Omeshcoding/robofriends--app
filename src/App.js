import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
  }
  console.log('constructor')
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users =>this.setState({robots:robots})       )
    
    console.log('check')
  }
  
  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot=> {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      
      
      return (
        <>
          <h1 className='text-center text-7xl text-purple-900  my-4'>RoboFriends</h1>
          <Searchbox searchChange={this.onsearchChange} />
         
          <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
        </>
      );
    }
  }
}
export default App;
