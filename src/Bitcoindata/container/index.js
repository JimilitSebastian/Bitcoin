/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Chart from "../components/chart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector} from 'react-redux';
import {getBitCoinFetch}  from '../../redux/actions'

const Home = () => {
    const bitcoin = useSelector(state => state.reducer.bitcoin);
    const [symbol,setSymbol] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBitCoinFetch())
    }, [])

    useEffect(() => {
        console.log(symbol);
    }, [symbol])

    return(
        // eslint-disable-next-line react/jsx-no-undef
        <div className="bitcoin-common">
            <Container fluid>
                <Row>
                    <div className="header">
                        <h2>Bitcoin Candlestick Chart </h2>
                    </div>
                </Row>
            </Container>
            <Container>
            <Row>
                    {
                        !symbol? 
                        bitcoin.map(coin=>
                                                                  
                                        <Col  >
                                            <div className="bitcoin">
                                                {/* <a href='#' onClick={()=>fetchGraphData(coin.symbol)}>{coin.symbol}</a> */}
                                                <Button variant="link" onClick={()=>setSymbol(coin.symbol)}>{coin.symbol}</Button>
                                            </div>
                                        </Col>           
                                
                            )
                        :
                            <div>
                            <Chart symbol={symbol} setSymbol={setSymbol}/></div>
                        
                        }  
                </Row>
            </Container>
        </div>
    )
}

export default Home;