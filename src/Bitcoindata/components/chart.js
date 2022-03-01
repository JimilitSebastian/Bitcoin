/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
import React,{ useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
const Chart = ({symbol,setSymbol}) => {

  const [graphData, setGraphData] =useState([])
  console.log("test",graphData);
  const fetchGraphData = async () => {
    try {
        let response = await axios.get(`https://api2.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&startTime=1645660800000`)
        let newData = response.data.map(item=>{
            let obj =  { 
                        x: new Date(item[0]),
                        y: [parseFloat(item[1]),parseFloat(item[2]),parseFloat(item[3]),parseFloat(item[4])] 
                    }
            return obj;
        });
        setGraphData(newData)
    } catch(e) {
        console.log(e)
    }
}


        const state = {
            series: [{
              data: graphData,              
            }],
            options: {
              chart: {
                type: 'candlestick',
                height: 350
              },
              title: {
                text: 'Bitcoin Data',
                align: 'left'
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            },          
          };
        
          useEffect(() => {
            fetchGraphData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
      
        return (
            <div>
                <button onClick={()=>{setSymbol(null)}}>Back</button>
                <div className="common">
                    <div >
                        <ReactApexChart className="chart" options={state.options} series={state.series} type="candlestick" height={350} width={800} />
                    </div>
                </div>
            </div>
        );
      

  }

  export default Chart;
