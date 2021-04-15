import React, { useState } from 'react'
import { Coin } from './Coin';

export const FlipCoin = () => {
    const [coinArray, setCoinArray] = useState([]);
    const coinSides = ["heads", "tails"];
    const handleClick = e => {
        setCoinArray(prevArray => [...prevArray, coinSides[Math.floor(Math.random() * 2)]]);
    }

    return (
        <div>
            <h1>Let's Flip a Coin!</h1>
            {coinArray[coinArray.length - 1] && <Coin coinSide={coinArray[coinArray.length - 1]} />}
            <button onClick={() => handleClick()}>Flip me!</button>
            <p>{`Out of ${coinArray.length}, there have been ${coinArray.filter(x => x === "heads").length} and ${coinArray.filter(x => x === "tails").length} tails`}</p>
        </div>
    )
}
