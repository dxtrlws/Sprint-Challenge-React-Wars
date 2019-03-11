import React, { Component } from 'react';
import Characters from './components/Characters'
import Loading from './components/Loading'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTimeout(() => {
          this.setState({ starwarsChars: data.results, isLoading: false });
        }, 3000);
        
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars)
    return (
      <div>
         <header>
          <img src="http://localhost:3000/images/logo.png" alt="star wars logo" width="300px"/>
        </header>
      <div className="container">
        <div className="row">
        {this.state.isLoading ? <Loading /> : this.state.starwarsChars.map((characters, index) => {
          return <Characters characters={characters} key={index} />
        }) }
      </div>
      </div>
      </div>
    );
  }
}

export default App;
