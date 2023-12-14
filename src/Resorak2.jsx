import React from 'react';
import './Resorak.css';

const Resorak2 = (props) => (
    <div className="resorak2">
        <h1>{props.auto.nazwa}</h1>
        <p>{props.auto.opis}</p>
        <img src={props.auto.obrazek} alt={props.auto.nazwa}/>
    </div>
)
export default Resorak2;