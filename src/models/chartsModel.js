import React from "react"

export default {
  connectToRestaurant: (url) => {
  },

  LineChartModel: (props) => {
    return {
      labels: props.labels,
      datasets: props.datasets
    }
  },

  ChartDatasetModel: (props) => {
    return {
      label: props.label,
      data: props.data,
      backgroundColor:(props.backgroundColor) ? props.backgroundColor : '',
      borderColor: (props.borderColor) ? props.borderColor : '#ADD8E6',
      tension: (props.tension) ? props.tension : 0.2,
      fill: (props.fill) ? props.fill : false,
      pointStyle: (props.pointStyle) ? props.pointStyle : 'rect',
      pointBorderColor: (props.pointBorderColor) ? props.pointBor : '#fff',
      showLine: (props.showLine) ? props.showLine : true,
    }
  },

  BarChartModel: (props) => {
    return{
      labels: props.labels,
      datasets: props.datasets
    }
  },

  DonatChartModel: (props) => {
      
    return {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          backgroundColor: (props.backgroundColor) ? 
          props.backgroundColor: 
            ['rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'],
          borderColor: (props.borderColor) ? props.borderColor : ['#fff'],
          borderWidth: (props.borderWidth) ? props.borderWidth : 0.5 ,
        },
      ],
    };
  }
}