import React from 'react'
import '../styles/Coin.css';

export const Coin = (props) => {
    return (
        <div className="coin">
            <img src={`https://tinyurl.com/react-coin-${props.coinSide}-jpg`} alt="Coin side" />
        </div>
    )
}
