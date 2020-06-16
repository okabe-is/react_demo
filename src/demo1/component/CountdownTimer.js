import React, {Component} from 'react';

class CountdownTimer extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            countdown: props.time * 1000, //このmsまでカウントダウンする
            time_ms: 0, // Start後の経過時間 単位は ms
            isOn: false,
        }
    }

    startTimer = () => {
        this.setState({
            //経過時間を蓄積するための処理
            startAt: Date.now(),
        })

        this.timer = setInterval(
            () => {
                //経過時間
                let spent_time = Date.now() - this.state.startAt;

                // console.log(spent_time);
                this.setState({
                    time_ms: spent_time < this.state.countdown ? spent_time : this.state.countdown,
                });

                // 経過時間が目標値となったらカウントダウンを止めて指定の処理実行
                if (this.state.time_ms >= this.state.countdown) {
                    clearInterval(this.timer);
                    this.props.afterCountdown();
                }
            }, 1);
    }

    render() {

        let rest_of_time = this.state.countdown - this.state.time_ms;
        let style = {
            color: rest_of_time ? "black" : "red"
        }

        return (
            <div>
                <h3 style={style}>{Math.ceil(rest_of_time / 1000)} s</h3>
            </div>
        );
    }
}

export default CountdownTimer;