import React from "react";

function Products({state,dispatch}){
    const {products,cart} = state;
    return (
        <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            width : "80%",
        }}
        >{
            products.map((prod)=>(
                <div
                key={prod.id}
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    margin:10,
                    padding:10,
                    width:"20%",
                    gap:10,
                    border:"1px solid black",
                    borderRadius:5,
                    background:"yellow",
                }}
                >
                    <img src={prod.thumbnail} alt={prod.title} style={{height:200,objectFit:"cover"}}/>
                    <div style = {{display:"flex",justifyContent:"space-between",}}>
                        <span>{prod.title}</span>
                        <b>{prod.price}</b>
                    </div>
                    {cart.some((p)=>p.id===prod.id) ? 
                    <button 
                    style={{
                        backgroundColor:"red",
                        padding:5,
                        border:0,
                        borderRadius:5,
                        color:"white",
                        }}
                        onClick={()=>{
                            dispatch({
                                type:'REMOVE_FROM_CART',
                                payload:prod.id,
                            })
                        }}
                    >remove from cart
                    </button>
                    :<button 
                    style={{
                        backgroundColor:"green",
                        padding:5,
                        border:0,
                        borderRadius:5,
                        color:"white"}}
                        onClick={()=>{
                            dispatch({
                                type:"ADD_TO_CART",
                                payload:{
                                    id:prod.id,
                                    title:prod.title,
                                    thumbnail:prod.thumbnail,
                                    price:prod.price,
                                    qty:1,
                                }
                            })
                        }}
                    >Add to cart
                    </button>
                    }
                    
                </div>
            ))
        }
        </div>
    )
}

export default Products;