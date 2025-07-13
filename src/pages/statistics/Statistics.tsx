import React from 'react'
import LineCharts from '../charts/LineChart'
import DoughnutCharts from '../charts/DoughNutChart'

const Statistics = () => {
  return (
    <div className='container'>
      <h2 className='text-center text-[30px] font-semibold mb-5'>Statistics</h2>
      <LineCharts />
      <DoughnutCharts />
    </div>
  )
}

export default React.memo(Statistics)
