import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import ChartExample from '../components/Chart/ChartExample';
import TableExample from '../components/Table/TableExample';
import GaugeChartExample from '../components/Chart/GaugeChartExample';
const Test = () => {
  return (
    <BaseLayout>
        <TableExample/>
        <ChartExample/>
        <GaugeChartExample/>
    </BaseLayout>
  )
}

export default Test