import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    homeState: state.homeReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: num => {
      dispatch({
          type:"INCREMENT",
          num
      })
    },
    reduce: num => {
      dispatch({
          type:"REDUCE",
          num
      })
    }
  }
}

function Container(C){
    return connect(
        mapStateToProps,
        mapDispatchToProps
      )(C)
}
export default Container