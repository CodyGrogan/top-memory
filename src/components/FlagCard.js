import React, { Component, useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid';


export function FlagCard(props){

    let [clickNum, setClickNum] = useState(0);
    let countryname = props.countryname;
  
    const clickEvent = (reportClick) =>{

        console.log("click event fired")
        
        if (clickNum == 0){

        setClickNum(clickNum + 1);
        props.click(false);
        
        }
        else{
            props.click(true);
        }
    };

    return <div onClick={clickEvent} className="flagCard"><img className="flag" src={props.countryflag} /><h2>{props.countryname}</h2></div>
}