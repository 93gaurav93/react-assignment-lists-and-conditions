import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {

  state = {
    textValue: ''
  };

  textChangeHandler = (event) => {
    this.setState({
      textValue: event.target.value
    });
  }

  removeCharacter = (event, charIndex) => {
    let string = this.state.textValue;
    string = string
      .split('')
      .filter((c, i) => {
        return i !== charIndex
      })
      .join('');
    this.setState({
      textValue: string
    });
  }

  render() {

    let textStyle = {
      width: '700px',
      hieght: '50px',
      padding: '10px',
      margin: '20px',
      border: '2px solid gray',
      fontSize: '20px'
    }

    return (
      <div className="App">
        <input 
          style={textStyle} 
          type="text"
          placeholder="Type here..." 
          onChange={(event) => this.textChangeHandler(event)}
          value={this.state.textValue}
        />
        <Validation textValue={this.state.textValue} />
        
        {
          this.state.textValue.split('').map((character, index) => {
            return (
              <Char key={index} index={index} character={character} click={this.removeCharacter} />
            )
          })
        }

      </div>
    )
  }

}


export default App;
