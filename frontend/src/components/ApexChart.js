import React, { useMemo } from 'react'
import Chart from "react-apexcharts";
import { getStatOfmails } from '../redux/allCourriersReducer';
import { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ApexChart() {

    const dispatch = useDispatch()
    const { loading, untreated, inProgress, suspended }  = useSelector(state => state.courrierStats)

    const [nonTraite, setNonTraite] = useState(0)
    const [suspendu, setSuspendu] = useState(0)
    const [enCours, setEnCours] = useState(0)
  
    useEffect(() => {
      if(untreated) setNonTraite(untreated)
      if(suspended) setSuspendu(suspendu)
      if(inProgress) setEnCours(enCours)
    }, [untreated,suspended,enCours])

    useLayoutEffect(() => {
        dispatch(getStatOfmails())
    }, [])

    const labels = ['Non traité', 'Suspendus', 'En cours']
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
                            size: '67%',
                        },
                        track: {
                            background: "#f7f7f7"
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
                    floating: true,
                    fontSize: '16px',
                    position: 'left',
                    offsetX: 160,
                    offsetY: 15,
                    labels: {
                      useSeriesColors: true,
                    },
                    markers: {
                      size: 0
                    },
                    formatter: function(seriesName, opts) {
                      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                      vertical: 3
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                  colors: ['#3497fa', '#0084ff', '#3497b0', '#0077B5'],
                  labels
                }  
    return (
        <div id="chart">
          {untreated  &&
            <Chart options={options} series={[nonTraite,suspendu,enCours]} type="radialBar" height={400} />}
        </div>
    )
}

export default ApexChart
