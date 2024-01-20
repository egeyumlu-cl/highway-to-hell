'use client'

import styles from './components.module.css';
import React, { useState } from 'react';

export function Deck(props) {
  const [isSelected, setSelected] = useState(false);

  const selectDeck = () => {
    const id = props.id;
    
    if (isSelected) {
      setSelected(false);
      props.deleteDeck(id)
    } else {
      setSelected(true);
      props.addDeck(id)
    }
  }

  

  return (
    <div 
      className={styles.deck + " " + (isSelected ? styles.selected : "")} 
      onClick={() => selectDeck()}>
      <div>{isSelected ? "􀁣" : "􀁢"}</div>
      <div>{props.title}</div>
      <div className={styles.cardcount}>{props._count.cards}</div>
    </div>
  );
}

export function Button(props) {
  // props contains button text
  return (
    <button className={styles.button + " " + (props.isEnabled ? styles.enabled : styles.disabled)} onClick={props.onClick}>
      {props.isEnabled ? props.text : "Select Deck"}
    </button>
  )
}


// // Create a card component that takes in a card object and renders it
// export default function Card(props) {
//     let [isSelected, setIsSelected] = useState(false);

//     return (
//         <div class="card">
//             <div class="card-text">{props.text}</div>
//         </div>
//     )
// }
