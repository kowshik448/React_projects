import React from "react";
import ACTIONS from "../actions/action";

function OperationButton({operator , dispatch}){
    return (
        <button onClick={()=>dispatch({type:ACTIONS.ADD_OPERATOR,payload:operator})}>{operator}</button>
    )
}

export default OperationButton;