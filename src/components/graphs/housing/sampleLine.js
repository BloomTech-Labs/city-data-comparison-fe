// import React, {useState, useEffect} from 'react';
// import {Line} from 'react-chartjs-2';
// import PhillyData from './mockSelected_js';


// export default function PhillyData({selected}) {
//     const [labels, setLabels] = useState([])

//     function numberCommas(x) {
//         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//       }

//       useEffect(() => {
//         let data = selected[0];
//         if (data["Historical Property Value Data"]["Average Home Value"]) {
//             setLabels(Object.keys(data["Historical Property Value Data"]["Average Home Value"]))
//         } else if (data["Historical Property Value Data"]["Four Bedroom Houses"]){ 
//             setLabels(Object.keys(data["Historical Property Value Data"]["Four Bedroom Houses"]))
//         } else if (data["Historical Property Value Data"]["Three Bedroom Houses"]){ 
//           setLabels(Object.keys(data["Historical Property Value Data"]["Three Bedroom Houses"]))
//         } else if (data["Historical Property Value Data"]["Two Bedroom Houses"]){ 
//           setLabels(Object.keys(data["Historical Property Value Data"]["Two Bedroom Houses"]))
//         } else {
//           setLabels(["This data is currently unavailable."])
//         }
//     }, [selected])
// }