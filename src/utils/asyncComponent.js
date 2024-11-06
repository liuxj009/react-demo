import React from "react"

export default function asyncComponent(importComponent){
    return class asyncComponent extends React.Component{
        constructor(){
            super();
            this.state={
                component:null
            }
        }
        componentDidMount(){
            console.log("asyncComponent");
            importComponent().then((mod)=>{
                this.setState({
                    component:mod.default
                })
            })
        }
        render(h) {
            const {
                component:C
            } = this.state;
           return  C?<C ></C>:null
        }
    }

    
}