import React, { useEffect, useState } from "react";

function Cart({state,dispatch}){
    const {cart} = state;
    const [total,setTotal] = useState(0);
    const changeqty = (id,qty)=>{
        dispatch({
            type:'CHANGE_QTY_IN_CART',
            payload:{
                id,qty
            }
        })
    }
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>{
            return acc+curr.qty*curr.price
        },0))
    },[cart])

    return (
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            margin:10,
            padding:10,
            width:"20%",
            backgroundColor:"blue",
            color:"white"
        }}
        >
            <b style={{fontSize:'30',alignSelf:'center'}}>Cart</b>
            <b style={{fontSize:'30',alignSelf:'center'}}>Sub-Total : $ {total}</b>
            <div style={{display:"flex",width:"100%",flexDirection:"column"}}>
                {
                    cart.length>0 ? (
                        cart.map((prod)=>(
                            <div key={prod.title} style={{display:"flex",justifyContent:"space-between",padding:"10",border:" 1 px solid yellow",margin:5,}}>
                                <div style={{display:"flex",gap:10}}>
                                    <img src={prod.thumbnail} alt={prod.title} style={{width:70,objectFit:"cover"}} />
                                    <div style = {{display:"flex",flexDirection:"column",justifyContent:"space-evenly",}}>
                                        <span>{prod.title}</span>
                                        <b>{prod.price} $</b>
                                    </div>
                                </div>
                                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                                    <button onClick={()=>{
                                        changeqty(prod.id,prod.qty-1)
                                    }}>-</button>
                                    <span>{prod.qty}</span>
                                    <button onClick={()=>{
                                        changeqty(prod.id,prod.qty+1)
                                    }}>+</button>

                                </div>
                            </div>
                        ))
                    ):(
                        <span style={{alignSelf:"center"}}>cart is empty</span>
                    )
                }
            </div>

        </div>
    )
}

export default Cart;