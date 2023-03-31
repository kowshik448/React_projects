import React, { useContext, useState } from "react";
import './pixelboard.css';

function Pixel(props){
    const {selectedColor} = props
    const [pixelColor , setPixelColor] = useState('#fff');
    const applyColor = ()=>{
        setPixelColor(selectedColor)
    }
    return(
        <div 
        className="pixel-box"
        onClick={applyColor}
        onDragOver={applyColor}
        style={{backgroundColor:pixelColor}}
        ></div>
    )
}

export default Pixel;