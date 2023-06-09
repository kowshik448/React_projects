export const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {...state,products:action.payload}
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,action.payload]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((p)=>p.id!==action.payload)}
        case 'CHANGE_QTY_IN_CART':
            return {...state , cart:state.cart.filter(c=>c.id===action.payload.id ? c.qty=action.payload.qty :c.qty)}
        default:
            break
    }
}