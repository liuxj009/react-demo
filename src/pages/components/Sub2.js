import React from "react"
import {Consumer} from "./context"
import PropTypes from "prop-types";
class Sub2 extends React.Component{
   
    static contextTypes = {
        count: PropTypes.number,
        mes:PropTypes.string
    };

    render() {
        console.log("context sub2",this.context);
        return (
          <div>
              <div>
                  context1:{this.context.count}
               
              </div>
              <div>
                    context2:{this.context.mes}
              </div>
          </div>
        )
    }
}

export default Sub2