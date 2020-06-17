import React, {Component} from "react";

class Child extends Component{
    constructor(props) {
        super(props);

        console.log("Demo3.Child: execute constructor");

        this.state = {
            msg: 'this is child component.'
        };
    }

    static  getDerivedStateFromProps(props, state){
        console.log("Demo3.Child: execute getDerivedStateFromProps");
        return state;
    }

    componentWillUnmount() {
        console.log("Demo3.Child: execute componentWillUnmount");
    }

    componentDidMount() {
        console.log("Demo3.Child: execute componentDidMount");
    }

    render() {
        console.log("Demo3.Child: execute render");
        return (
            <div>
                <h3>{this.state.msg}</h3>
            </div>
        );
    }
}

export  default  Child;