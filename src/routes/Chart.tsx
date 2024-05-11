// import { useQuery } from "react-query";
// // import { fechCoinHistory } from "../api";
// import ReactApexChart from "react-apexcharts";

// interface IHistorical {
//     time_open: number;
//     time_close: number;
//     open: string;
//     high: string;
//     low: string;
//     close: string;
//     volume: string;
//     market_cap: number;
// }
// interface ChartProps{
//     coinId: string;
// }

// function Chart({coinId}:ChartProps) {
//     const {isLoading, data} = useQuery<IHistorical[]>(
//         ["ohlcv", coinId], 
//         ()=>fechCoinHistory(coinId)
//     )
//     return (
//         <div>
//             {isLoading ? (
//                 "Loading chart..."
//             ) : (
//                 <ReactApexChart 
//                     type="line"
//                     series={[
//                         {
//                             name: "price",
//                             data: data?.map((price)=>Number(price.close))as number[],
//                         }
//                     ]} 
//                     options={{
//                         theme:{
//                             mode:"dark"
//                         },
//                         chart:{
//                             height: 500,
//                             width: 500,
//                             toolbar:{
//                                 show: false
//                             },
//                             background: "transparent"
//                         },
//                         grid:{show:false},
//                         stroke:{
//                             curve:"smooth",
//                             width:3
//                         },
//                         fill:{
//                             type: "gradient", 
//                             gradient:{gradientToColors:["#0be881"], stops:[0,100]},
//                         },
//                         colors:["#0fbcf9"],
//                         tooltip:{
//                             y:{
//                                 formatter:(value) => `$${value.toFixed(2)}`,
//                             }
//                         },
//                         xaxis:{
//                             categories: data?.map((price) => new Date(price.time_close*1000).toUTCString()),
//                             type: "datetime"
//                         }
//                     }}
//                 />
//             )}
//         </div>
//     );
// }
// export default Chart;