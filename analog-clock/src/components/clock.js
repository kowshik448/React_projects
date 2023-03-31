import React from "react";
import './clock.css';


function AnalogClock({time}){
    const DIGITS = ['1','2','3','4','4','5','6','7','8','9','10','11','12'];
    const {secondsRatio , minRatio , hoursRatio} = time;

    return (
        <div className="main-container">
            <div className="clock-container">
                {DIGITS.map((item,index)=>(
                    <div key={index} className={`digit digit-${item}`}><div>{item}</div></div>
                ))}
                <div 
                className="handle hour" 
                style={{
                    transform:`rotate(${hoursRatio*360}deg)`}}></div>
                <div className="handle min"
                style={{
                    transform:`rotate(${minRatio*360}deg)`}}></div>
                <div className="handle sec"
                style={{
                    transform:`rotate(${secondsRatio*360}deg)`}}></div>
            </div>
        </div>
    )
}

export default AnalogClock;