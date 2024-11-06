const INCREMENT ="INCREMENT";
const REDUCE= "REDUCE"
export {
    INCREMENT,
    REDUCE
}


const reduce = num =>({
    type:"REDUCE",
    num
})

const add =  (num) => (dispatch,getState) => {
    console.log("num",num);
    console.log(getState());
    dispatch({
        type:"INCREMENT",
        num
    })
};
// const  reduce =  (num) => (dispatch) => {
//     dispatch({
//         type:"REDUCE",
//         num
//     })
// }

export {
    add,
    reduce
}