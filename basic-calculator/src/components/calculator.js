import React from "react";
import DigitButton from "./digitButton";
import OperationButton from "./operationButton";
import './styles.css';
import ACTIONS from "../actions/action";

function Calculator({state,dispatch}){
    const {previousOperand , currentOperand,operator} = state;
    return (
        <div className="grid-container">
            <div className="grid-output">
                <div className="previousOperand">{previousOperand}{operator}</div>
                <div className="currentOperand">{currentOperand}</div>
            </div>
            <button className="span-2 clear" onClick={()=>dispatch({type:ACTIONS.CLEAR})}>AC</button>
            <button onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})} >DEL</button>
            <OperationButton dispatch={dispatch} operator='/'/>
            <DigitButton dispatch={dispatch} digit='1'/>
            <DigitButton dispatch={dispatch} digit='2'/>
            <DigitButton  dispatch={dispatch} digit='3'/>
            <OperationButton dispatch={dispatch} operator='x'/>
            <DigitButton dispatch={dispatch} digit='4'/>
            <DigitButton dispatch={dispatch} digit='5'/>
            <DigitButton dispatch={dispatch} digit='6'/>
            <OperationButton dispatch={dispatch} operator='+'/>
            <DigitButton dispatch={dispatch} digit='7'/>
            <DigitButton dispatch={dispatch} digit='8'/>
            <DigitButton dispatch={dispatch} digit='9'/>
            <OperationButton dispatch={dispatch} operator='-'/>
            <DigitButton dispatch={dispatch} digit='.'/>
            <DigitButton dispatch={dispatch} digit='0'/>
            <button className="span-2" onClick={()=>dispatch({type:ACTIONS.EVALUATE})}>=</button>
        </div>
    )
}

export default Calculator;