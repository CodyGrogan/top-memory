import React, { Component, useState, useEffect, useRef } from 'react';

export function GameBoard(props){
    
    return <div className="cardContainer">
        {props.cardList}
    </div>
}