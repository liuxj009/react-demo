import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

function Payment(props) {
    const { match, location, history, staticContext, ...others } = props;
    console.log("---payment render---", props);
    console.log("props", props);
    const [count, setCount] = React.useState(0);

    const toPayment = useCallback((params) => {
        console.log("useCallback-fn", params);
    }, [count])

    if (props.location.search.indexOf("buy") > -1) {
        toPayment()
    }

    return (<div>
        <button onClick={() => {
            setCount(count + 1)
        }}>{count}</button>
        <div onClick={() => toPayment()}>payment</div>
    </div>)
};
export default withRouter(Payment)