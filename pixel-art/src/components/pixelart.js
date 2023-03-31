import React, { useContext } from "react";
import { CirclePicker } from "react-color";
import Row from "./rows";
import './pixelboard.css';


function PixelArt(props){
    const {selectedColor , setSelectedColor} = props
    const rows = [];
    for(let i=0 ;i<15;i++){
        rows.push(<Row key={i} selectedColor={selectedColor}/>)
    }

    function changeColor(color){
        setSelectedColor(color.hex);
    }
    return (
        <div className="board">
            <div className="editor"><h1>PIXEL ART</h1>{rows}</div>
            <div>
                <CirclePicker 
                className="color-picker" 
                width="100px"
                color={selectedColor}
                onChangeComplete={changeColor} />
                <h3>selected color</h3>
                <div className="block" style={{backgroundColor : selectedColor}}></div>
            </div>
            
        </div>
    )
}

export default PixelArt;