import React from 'react'
import { useLocation } from 'react-router-dom'
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { Bubble } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
const Graph = () => {
  const location = useLocation()
  const componentData = location.state.data
  const graphname = location.state.nameGraph
  console.log(componentData)
  const xaxis = [Object.keys(componentData)]
  const yaxis = [Object.values(componentData)]
  console.log(xaxis.map(x => x), 'ax')
  console.log(xaxis, yaxis)

  // Options for graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: componentData.name,
      },
    },
  };

  // data for graph
  const data = {
    labels: ['Janury', 'February', 'March', 'April', 'May', 'June', 'July','August','September','Oct','Nov','Dec'],

    datasets: [
      {
        label: 'Data',
        data: [91, 37, 56, 45,83,34,66,94,88,92,56,72],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1
      },
      // {
      //   label: 'Dataset 2',
      //   data: [9,3,6,9],
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (

    <div className='w-75 mx-auto p-4'>
      {graphname == 'Pie' ?
        <Pie options={options} data={data} />
        : graphname == 'Bar' ?
          <Bar options={options} data={data} />
          :graphname == 'Doughnut' ?
          <Doughnut options={options} data={data} />
          :graphname == 'PolarArea' ?
          <PolarArea options={options} data={data} />
          :graphname == 'Bubble' ?
          <Bubble options={options} data={data} />
          :graphname == 'Scatter' ?
          <Scatter options={options} data={data} />
          :graphname == 'Radar' ?
          <Radar options={options} data={data} />
          :null
      }
    </div>
  )
}

export default Graph