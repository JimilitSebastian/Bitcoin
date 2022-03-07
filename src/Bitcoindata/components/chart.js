
import React,{ useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

import {getBitCoinDetailsFetch}  from '../../redux/actions'
import { useDispatch,useSelector } from "react-redux";

const Chart = ({symbol,setSymbol}) => {
  
const [graphData, setGraphData] =useState([])

const dispatch = useDispatch()

  useEffect(() => {
   
    dispatch(getBitCoinDetailsFetch({symbol:symbol}))
}, [])

const bitcoin_details = useSelector(state => state.reducer.bitcoin_details);


useEffect(() => {
      if(bitcoin_details && bitcoin_details.length)  {

      
        let newData = bitcoin_details.map(item=>{
            let obj =  { 
                        x: new Date(item[0]),
                        y: [parseFloat(item[1]),parseFloat(item[2]),parseFloat(item[3]),parseFloat(item[4])] 
                    }
            return obj;
        });
        setGraphData(newData)
 
      }
    },[bitcoin_details])

        const state = {
            series: [{
              data: graphData,              
            }],
            options: {
              chart: {
                type: 'candlestick',
                height: 500
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
        
   
      
        return (
            <div className="chart-common">
                <div>
                  <button className="back" onClick={()=>{setSymbol(null)}}>Back</button>
                </div>
                  <div className="common">
                      <div >
                          <ReactApexChart className="chart" options={state.options} series={state.series} type="candlestick" height={350} width="100%" />
                      </div>
                  </div>
                
                 
            </div>
        );
      

  }

  export default Chart;
