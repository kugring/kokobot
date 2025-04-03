import React from "react"
import BaseLayout from "../layouts/BaseLayout"
import TableExample from "../components/Table/TableExample"
import GaugeChartExample from "components/Chart/GaugeChartExample"
import { CalendarExample } from "components/Calander"
const Test = () => {
    return (
        <BaseLayout>
            <TableExample />
            <GaugeChartExample />
            <CalendarExample />
        </BaseLayout>
    )
}

export default Test
