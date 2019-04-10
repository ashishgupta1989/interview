import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    buttonTexts: [{label: '7', color: 'grey'},
      {label: '8', color: 'grey'},
      {label: '9', color: 'grey'},
      {label: '/', color: 'orange'},
      {label: '4', color: 'grey'},
      {label: '5', color: 'grey'},
      {label: '6', color: 'grey'},
      {label: '-', color: 'orange'},
      {label: '1', color: 'grey'},
      {label: '2', color: 'grey'},
      {label: '3', color: 'grey'},
      {label: '+', color: 'orange'},
      {label: '0', color: 'grey'},
      {label: 'AC', color: 'orange'},
      {label: '=', color: 'orange'}
    ],
    input1: '0',
    input2: '0',
    output: '0',
    operator: ''
  }

  handleButtonClick = (buttonText) => {
    let {input1, input2, output, operator} = this.state
    if (buttonText === 'AC') {
      this.setState({
        input1: '0',
        input2: '0',
        output: '0',
        operator: ''
      })
    }
    else {
      if (buttonText !== '/' && buttonText !== '-' && buttonText !== '+' && buttonText !== '=') {
        input1 = `${input1 === '0' ? '' : input1}${buttonText}`
        this.setState({
          input1,
          output: input1
        })
      }

      if (buttonText === '/') {

        this.setState({
          output: '0',
          input2: input1,
          input1: '0',
          operator: buttonText
        })
      }

      try {
        if (buttonText === '=' && input2 !== '0') {
          if (operator === '/') {
            output = parseInt(input2) / parseInt(input1)
          }

          this.setState({
            output
          })
        }
      } catch(e) {
        console.log('error', e)
        this.setState({
          output: '0'
        })
      }
    }
  }

  render() {
    const {buttonTexts, output} = this.state
    return (
      <div className='container'>
        <div className='textbox'>
          {output}
        </div>
        <div className='buttons-container'>
          {buttonTexts.map((text, index) => {
            return <div key={index} className={`${text.color}-button`} onClick={() => this.handleButtonClick(text.label)}>
              {text.label}
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
