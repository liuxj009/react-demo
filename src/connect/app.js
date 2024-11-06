import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import routers from "@/connect/routers"
class App extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("app constructor");
        this.title = 'title'

    }
    // componentWillReceiveProps() {
    //     console.log("app componentWillReceiveProps");
    // }
    // componentWillMount() {
    //     console.log("app componentWillMount");
    // }
    componentDidMount() {
        console.log("app componentDidMount");
        setTimeout(() => {
            console.log("app setTimeout");

            this.title = 'title3'
        }, 4000)
    }
    // shouldComponentUpdate(){
    //     console.log("app shouldComponentUpdate");
    // }
    // componentWillUpdate() {
    //     console.log("app componentWillUpdate");
    // }
    componentDidUpdate() {
        console.log("app componentDidUpdate");
    }

    render() {
        console.log("render");
        return (
            <Router>
                <Switch>
                    {routers.map((route) => {
                        return <Route key={route.name} path={route.path} component={route.component} exact={route.exact}></Route>
                    })}
                </Switch>
            </Router>
        )
    }
}
export default App