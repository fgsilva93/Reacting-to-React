import React, { Component } from 'react'; 
import App from './components/App'

class Test extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
            text: '',
            hasLoaded: false 
        };
    }

    handleInputChange(value) {
        this.setState( {text: value} )
    }

    handleClick() {
        console.log(this.state)
    }

    render () {
        return (
            <React.Fragment>

                <input
                placeholder ='What is your name?'
                value = {this.state.text}
                onChange = { (event) => this.handleInputChange(event.target.value) }
                />
                <button onClick = { (e) => this.handleClick(e) }>
                    Click Me
                </button>
            <App name = 'Franco Silva' />
            {/* <h1>Franco Silva</h1> */}

            </React.Fragment>
        )
    }
}

export default Test; 