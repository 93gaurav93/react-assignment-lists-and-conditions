import React, { Component } from 'react';
import styles from './App.module.css';
import Validation from './Components/Validation';
import Char from './Components/Char';
import Input from './Components/Input';

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
    string = string.split('');

    string.splice(charIndex, 1);

    this.setState({
      textValue: string.join('')
    });
  }

  render() {


    

    return (
      <div className={styles.App}>
        <Input textValue={this.state.textValue} changed={this.textChangeHandler}/>
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
