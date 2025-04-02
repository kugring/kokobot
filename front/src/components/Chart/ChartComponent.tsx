import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { DataItem } from "../../types/index"

interface ChartComponentProps {
    data: DataItem[];
    chartColors: {
        sales: string;
        profit: string;
    };
    chartTitle: string;
}

const ChartComponent = ({
    data,
    chartColors,
    chartTitle
}: ChartComponentProps) => {
    return (
        <ChartCard>
            <ChartTitle>{chartTitle}</ChartTitle>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" type="category" />
                    <YAxis type="number" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill={chartColors.sales} name="매출" />
                    <Bar dataKey="profit" fill={chartColors.profit} name="이익" />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    )
}

export default ChartComponent

const ChartCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
    margin-bottom: 20px;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`

const ChartTitle = styled.h2`
    margin: 0 0 20px 0;
    color: #333;
    font-size: 1.5rem;
    text-align: center;
` 