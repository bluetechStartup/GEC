import React from 'react'
import DonutChart from '../components/DonutChart';

const donutData = [
 {name: "READ", value: 40},
 {name: "30", value: 10}
]

function ChartPage() {
    return (
        <div style={{ width:"30%",margin:"80px auto" }}>
            <DonutChart data={donutData}  />
        </div>
    )
}

export default ChartPage