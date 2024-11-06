import React from "react"
import { Consumer } from "./context"
import PropTypes from "prop-types";
import Sub2 from "./Sub2"
class Sub extends React.PureComponent {

    constructor(props) {
        super(props)
        console.log("Sub constructor");
        this.state = {
            count: props.count
        }
    }
    static contextTypes = {
        count: PropTypes.number
    };

    getChildContext() {
        return {
            mes: "hello"
        }
    }

    static childContextTypes = {
        mes: PropTypes.string
    }
    // componentWillUnmount() {
    //     console.log("sub componentWillUnmount");
    // }
    // componentWillMount() {
    //     console.log("sub componentWillMount");
    // }
    // componentDidMount() {
    //     console.log("sub componentDidMount");
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log("sub componentWillReceiveProps", nextProps);
    //     this.setState({
    //         count: nextProps.count
    //     })
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState,"nextState");
    //     console.log("sub shouldComponentUpdate");  
    //     if(nextState.count !== this.state.count){
    //         return false
    //     }
    // }
    // componentWillUpdate(){
    //     console.log("sub componentWillUpdate");
    // }
    // componentDidUpdate(){
    //     console.log("sub componentDidUpdate");
    // }
    render() {
        console.log("Sub render");
        console.log("context", this.context);
        return (
            <div>
                {this.state.count}
            </div>
            // <Sub2></Sub2>
        )
    }
}

export default Sub