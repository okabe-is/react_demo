import React, {Component} from "react";

import CountdownTimer from "./component/CountdownTimer";

class Countdown extends Component {

    constructor(props) {
        super(props);
        this.countdownNode = React.createRef();

        this.state = {
            count: 3,
            startCountdown: false,
            endCountdown: false
        }
    }

    startHandler = () => {
        console.log('start.');
        this.setState({
            startCountdown: true,
            endCountdown: false,
        });
        // calling child component's method
        this.countdownNode.current.startTimer();
    }
    endHandler = () => {
        console.log('end.');
        this.setState({
            startCountdown: false,
            endCountdown: true,
        });
    }

    render() {
        return (
            <div>
                {this.state.startCountdown ||
                <button onClick={this.startHandler}>Start</button>}
                <CountdownTimer
                    ref={this.countdownNode}
                    time={this.state.count}
                    afterCountdown={this.endHandler}/>
                {this.state.endCountdown && <h3>Finish</h3>}

            </div>
        );
    }
}

export default Countdown;