import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundries from '../components/ErrorBoundries';
import {robots} from './robots';
import Searchbox from '../components/Searchbox';
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
  
  const {robots,searchfield} = this.state
  
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    return !robots.length ? <h1>Loading...</h1>: (
      <>
      <h1 className='text-center text-7xl text-purple-900  my-4'>RoboFriends</h1>
      <Searchbox searchChange={this.onsearchChange}/>
        <Scroll>
          <ErrorBoundries>
          <CardList robots={filteredRobots} />
          </ErrorBoundries>
          </Scroll>
      </>
    );

      }
    
  }

export default App;
