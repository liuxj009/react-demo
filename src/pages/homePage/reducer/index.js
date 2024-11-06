import {INCREMENT,REDUCE} from "./actions";

const initalState= {
    num:100
}
const homeReducer = (state=initalState, action ) => {
    console.log(action);
    switch (action.type) {
        case INCREMENT:
            return {...state,num: state.num + action.num}
        case REDUCE:
            return {...state,num: state.num - action.num}
        default:
            return state
    }
}

export default homeReducer