import React, {Component} from "react";
import CharDump from "./dump/CharDump";
import NumberUtil from "../NumberUtil";

import "./SimpleTypeingGame.css"

const quiz_list = ["apple", "banana", "lemon", "orange", "cherries", "grapes"];

class SimpleTypingGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            quiz: quiz_list[0],
            correct_num: 0
        }
    }

    inputHandler = (event) => {
        console.log("input handler");

        // check correctness
        const isCorrect = this.state.quiz === event.target.value;

        const n = isCorrect ? this.state.correct_num + 1 : this.state.correct_num

        this.setState({
            inputText: event.target.value,
            correct_num: n,
        });

        // switch quiz 1sec after
        if (isCorrect) {
            setTimeout(() => {
                this.setState({
                    inputText: "",
                    quiz: quiz_list[NumberUtil.getRandomInt(quiz_list.length)],
                })
            }, 1000)
        }

    }

    render() {

        // generate quiz character components
        const quiz_chars = this.state.quiz.split('').map((char, index) => {
            return <CharDump char={char}
                             inputChar={this.state.inputText.split('')[index]}/>
        });

        return (
            <div>
                <input type="text" onChange={this.inputHandler}
                       value={this.state.inputText}/>
                <div className="targetText">
                    {quiz_chars}
                </div>
                <p className="Score">SCORE: {this.state.correct_num}</p>
            </div>
        );
    }

}

export default SimpleTypingGame