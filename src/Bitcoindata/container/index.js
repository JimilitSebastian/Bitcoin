/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Chart from "../components/chart";

const Home = () => {

    const [bitcoins,setBitcoins] = useState([])
    const [symbol,setSymbol] = useState(null)
    
    useEffect(() => {
        fetchCoins();
    }, [])

    const fetchCoins = async ()=>{
        try {
            let response = await axios.get('https://api2.binance.com/api/v3/ticker/24hr')
            setBitcoins(response.data);
        }catch(e){
            console.log(e)
        }
    }
    const fetchGraphData = async (symbol)=>{
        setSymbol(symbol);
    }

    return(
        <div >
            <div className="header">
                    <h2>Bitcoin Candlestick Chart </h2>
                </div>
                <div className="bitcoin-common">
                    
       {
        !symbol?(
            bitcoins.map(coin=>{
                return (
                <div className="bitcoin">
                    <a href='#' onClick={()=>fetchGraphData(coin.symbol)}>{coin.symbol}</a>
                </div>
                )
            })
        ):(
            <Chart symbol={symbol} setSymbol={setSymbol}/>
        )
        }
        </div>
    </div>
    )
}

export default Home;