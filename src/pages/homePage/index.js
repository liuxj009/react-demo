import React from "react";
import { withRouter } from "react-router-dom"
import { add, reduce } from "./reducer/actions"
import { connect } from 'react-redux'
import { Provider } from "../components/context"
import Sub from "../components/Sub"
import PropTypes from "prop-types";
console.log(add);
class Home extends React.Component {
    constructor() {
        console.log("Home constructor");
        super();
        this.state = {
            count: 1
        }
    }
    // 1.在父组件中，定义一个getChildContext函数（名称固），此函数必须返回一个对象（该对象就是要共享给子孙组件的数据）
    // getChildContext() {
    //     console.log("home getChildContext");
    // 	return {
    // 		count: this.state.store.count
    // 	}
    // }

    // 2.使用属性校验，规定一下传递给子组件的数据类型。需要定义一个静态的childContextType（名称固定）
    // static childContextTypes = {
    //     count: PropTypes.number
    // }

    componentDidMount() {
        console.log("Home DidMount", this.props);

    }
    goNext() {
        const { history } = this.props;
        // 跳转方式-query (参数地址栏显示)
        // <Route path='/sample' component={sample}></Route> 
        history.push({
            pathname: "/sample",
            query: {
                type: 1
            }
        })

        // 跳转方式-params (参数地址栏不显示，刷新地址栏，参数丢失)
        // <Route path='/sample/:type' component={sample}></Route> 
        // history.push("/sample/1")

        // 跳转方式-state (参数地址栏不显示，刷新地址栏，参数不丢失)
        // <Route path='/sample' component={sample}></Route> 
        // history.push({
        //     pathname: "/sample",
        //     state: {
        //         type: "abc"
        //     }
        // })

        // 跳转方式 - 无参数跳转
        // history.push("/sample")
    }
    // componentDidMount() {
    //     console.log("home componentDidMount");
    // }
    // componentWillUpdate() {
    //     console.log("home componentWillUpdate");
    // }
    // componentDidUpdate() {
    //     console.log("homex componentDidUpdate");
    // }
    // componentWillReceiveProps() {
    //     console.log("homex componentWillReceiveProps");
    // }
    addCount = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }

        })
    }
    render() {
        console.log("home render");
        const { count } = this.state;
        return (<div>
            <div>homePage</div>
            <div >
                num:{this.props.homeState.num}
                <button onClick={this.props.add.bind(this, 1)}>加 </button>
                <button onClick={this.props.reduce.bind(this, 1)}>减 </button>
            </div>
            <div onClick={this.addCount}>
                state - count :{count}
            </div>
            <button onClick={this.goNext.bind(this)}> go sample </button>
            <hr></hr>
            {/* <Provider value={store}>
                <Sub></Sub>
            </Provider> */}
            <Sub count={this.props.homeState.num}></Sub>
        </div>)
    }
}
export default connect(
    ({ homeReducer }) => {
        return {
            homeState: homeReducer
        }
    }, {
    add,
    reduce
})(withRouter(Home))