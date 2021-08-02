// import React from 'react'
// import Chart from "react-apexcharts";

// class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {

//         series: [44, 55, 67, 83],
//         options: {
//           chart: {
//             height: 350,
//             type: 'radialBar',
//           },
//           plotOptions: {
//             radialBar: {
//               dataLabels: {
//                 name: {
//                   fontSize: '90px',
//                 },
//                 value: {
//                   fontSize: '18px',
//                 },
//                 total: {
//                   show: true,
//                   label: 'Total',
//                   formatter: function (w) {
//                   }
//                 }
//               }
//             }
//           },
//           labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
//         },      
//       };
//     }

//     render() {
//       return (    
//         <div id="chart">
//             <Chart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
//         </div>);
//     }
// }

// export default ApexChart

import React from 'react'
import Chart from "react-apexcharts";

function ApexChart() {
    const series = [100, 55, 67]
    const labels = ['Unread', 'Read', 'None']
    const options = {
                  chart: {
                    height: 350,
                    type: 'radialBar',
                  },
                  plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '40%',
                        },
                        track: {
                            background: "transparent"
                        },
                        dataLabels: {
                        name: {
                          fontSize: '10px',
                        },
                        value: {
                          fontSize: '18px',
                        },
                        total: {
                          show: true,
                          label: 'Courrier',
                          formatter: function (w) {
                          }
                        }
                      }
                    },
                  },
                  legend: {
                    show: true,
                    fontSize: '20px',
                    offsetX: 500,
                    offsetY: 30,
                    labels: {
                      useSeriesColors: true,
                    },
                  },
                  stroke: {
                    lineCap: "round"
                  },
                  colors: ['#3497fa', '#0084ff', '#3497b0', '#0077B5'],
                  labels
                }  
    return (
        <div id="chart">
            <Chart options={options} series={series} type="radialBar" height={350} />
        </div>
    )
}

export default ApexChart
