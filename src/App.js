import React, {Component} from 'react';
import './App.css';
import Countdown from "./countdown/Countdown";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className='Demo'>
                    <p>Demo 1: Countdown </p>
                    <Countdown/>
                </div>

                <div className="footer">
                    <a href="https://github.com/okabe-is/react_demo"><img
                        src="https://gh-card.dev/repos/okabe-is/react_demo.svg"
                        alt='card of repository.'
                    /></a>
                </div>
            </div>
        );
    }

}

export default App;
