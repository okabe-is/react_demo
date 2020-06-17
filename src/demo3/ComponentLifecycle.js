import React, {Component} from "react";
import Child from "./Child";

class ComponentLifecycle extends Component{
    constructor(props) {
        super(props);

        console.log("Demo3.Parent: execute constructor");

        this.state = {
            msg: 'this is parent component.'
        };
    }

    static  getDerivedStateFromProps(props, state){
        console.log("Demo3.Parent: execute getDerivedStateFromProps");
        return state;
    }

    componentDidMount() {
        console.log("Demo3.Parent: execute componentDidMount");
    }

    render() {
        console.log("Demo3.Parent: execute render");
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Child />
            </div>
        );
    }
}

export default ComponentLifecycle;