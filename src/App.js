import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = { quote: null,author:null };
  }

  componentDidMount() {    

    const url = 'https://random-quotes.now.sh/daily';
   
    fetch(url)
    .then((response)=> {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data)=> {

      this.setState(() => {
        return {author: data.data.author,quote: data.data.quote};
      });
    });
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.state.quote === '' || this.state.quote === null
            ? (
              <img src={logo} className="App-logo" alt="logo" />
            )
           : null
         }   

        <h1 className="App-title">{ this.state.quote}</h1>
        </header>

        {
          this.state.author !== ''
            ? (
              <code>{this.state.author}</code> 

            )
           : <code>Unknown </code> 
         }
</div>
    );
  }
}

export default App;
