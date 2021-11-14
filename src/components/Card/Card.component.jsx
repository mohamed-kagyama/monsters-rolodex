import React from "react";
import './Card.styles.css'
export const Card = (props) =>{
   return (
       <div className="card-container">
           <h2>{props.monster.name}</h2>
           <img 
           src={`https://www.robohash.org/${props.monster.id}?set=set2&size=180x180`} 
           alt="monster" />
           <p>{props.monster.email}</p>
       </div>
   )
}