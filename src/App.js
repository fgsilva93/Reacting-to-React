import React, { Component } from 'react'; 
import App from './components/App'

class Test extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
            text: this.props.text,
            hasLoaded: false,
            Loading: 'Loading...'
        };
    }

    handleInputChange(event) {
        if(this.state.hasLoaded === true) {
            this.setState( {text: event.target.value} );
        }
        else {
            this.setState({ Loading: event.target.value} );
        }
    }

    handleClick() {
        console.log(this.state.hasLoaded)
    }

    // componentDidMount() {
    //     this.setState( {hasLoaded: true}); 
    // }

    render () {
        return (
            <React.Fragment>

                <input
                placeholder ='What is your name?'
                value = {this.state.text}
                onChange = { (event) => this.handleInputChange(event) }
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