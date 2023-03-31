import ACTIONS from "../actions/action";

function evaluate({previousOperand,currentOperand,operator}){
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return 0
    let result;
    switch(operator){
        case '+':
            result = prev + current
            break
        case '-':
            result = prev-current
            break
        case 'x':
            result = prev*current
            break
        case '/':
            result = current !== 0 ? prev/current : 'infinity'
            break
    }
    return result
}

function reducer(state,action){
    switch (action.type){
        case ACTIONS.ADD_DIGIT:
            if(state.overWrite && state.previousOperand==null){
                return {
                    previousOperand:null,
                    operator:null,
                    overWrite:false,
                    currentOperand:action.payload
                }
            }
            if (state.currentOperand?.includes('.') && action.payload=='.') {
                return state
            };
            if (state.currentOperand=='0' && action.payload=='0') {
                return state
            };
            return {
                ...state,
                currentOperand : `${state.currentOperand || ""}${action.payload}`
            }
        case ACTIONS.ADD_OPERATOR:
            if(state.currentOperand == null && state.previousOperand == null){
                return state
            }
            if (state.currentOperand == null){
                return {
                    ...state,
                    operator:action.payload
                }
            }
            if(state.previousOperand == null){
                return {
                    ...state,
                    operator:action.payload,
                    previousOperand:state.currentOperand,
                    currentOperand:null
                }
            }
            return {
                ...state,
                operator:action.payload,
                previousOperand: evaluate(state),
                currentOperand:null
            }
        
        case ACTIONS.CLEAR:
            return {}
        
        case ACTIONS.EVALUATE:
            if( state.previousOperand == null || 
                state.operator == null ||
                state.currentOperand == null ){
                    return state
                }
            return {
                ...state,
                overWrite:true,
                previousOperand:null,
                operator:null,
                currentOperand:evaluate(state)
            }
        
        case ACTIONS.DELETE_DIGIT:
            if (state.overWrite){
                return {
                    ...state,
                    overWrite:false,
                    currentOperand:null
                }
            }
            if (state.currentOperand==null){
                return state
            }
            if (state.currentOperand.length==1) return {
                ...state,
                currentOperand:null
            }
            return {
                ...state,
                currentOperand:state.currentOperand.slice(0,-1)
            }
    }
}

export default reducer;