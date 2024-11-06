import React from "react"

const initValue = {
    key:"123456"
}


// function createContext(){
//     const _context = {
//         Provider:null,
//         Consumer:null
//     }

//     class Provider extends React.Component{
//         constructor(){
//             super()
//             this.state={
//                 value:null
//             }
//         }
//         render() {
//             const {Children} = this.props;
//             return {Children}
//         }
//     }
//     class Consumer extends React.Component{
//         constructor(){
//             super()
//         }
//         render() {
//             const {Children:fn} = this.props;
//             const child = fn()
//             return {Children()}
//         }
//     }

//     return _context
// }
const {Provider,Consumer} = React.createContext(initValue)

export {Provider,Consumer}