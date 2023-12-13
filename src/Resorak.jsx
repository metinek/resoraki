import React from 'react';
import './Resorak.css';

const Resorak = (props) => (
    <div className="resorak">
        <h1>{props.nazwa}</h1>
        <p>{props.opis}</p>
        <img src={props.obrazek} alt={props.nazwa}/>
    </div>
)
export default Resorak;