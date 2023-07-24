import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart (props) {
    return <Pie 
    data={props.data}
    height={400}
    width={400}
    options={{
        maintainAspectRatio : false
    }}/>;
}

export default PieChart
 
// from chartJS