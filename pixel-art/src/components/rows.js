import React from "react";
import Pixel from "./pixel";
import './pixelboard.css';

function Row(props){
    const {selectedColor}  = props
    const pixels = [];
    for(let i=0 ; i<10;i++){
        pixels.push(<Pixel key={i} selectedColor={selectedColor}/>)
    }
    return (
        <div className="pixels">{pixels}</div>
    )
}

export default Row;