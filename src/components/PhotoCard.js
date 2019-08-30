import React from 'react';
import { tsPropertySignature } from '@babel/types';

function PhotoCard(props) {
    return (
        <div>
            <div>{props.date}</div>
            <h2>{props.title}</h2>
            <img src={props.url}></img>
            
            <p>{props.explanation}</p>
        </div>
    );
}

export default PhotoCard;