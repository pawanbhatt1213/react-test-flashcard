import React from 'react';
import { useSelector } from "react-redux";

import StackCard from "./StackCard";

export default function Stack() {

    const {cards, title} = useSelector(state=> state.selectedStack);
    
    return (
        <>
            <h2 className="text-center">{title}</h2>
            {
                cards.map(card => <StackCard card={card} key={card.id} />)
            }
        </>
    )
}
