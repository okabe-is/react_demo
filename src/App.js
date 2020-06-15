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
            </div>
        );
    }

}

export default App;
