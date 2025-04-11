import styled from "styled-components"
import BaseLayout from "layouts/BaseLayout"
import HouseCardBox from "components/dashBoard/houseCardBox/houseCardBox"
import TotalHouseBox from "components/dashBoard/totalHouseBox/TotalHouseBox"
import farmStatusData from "mocks/farm-status.json"
import WeekBarChartBox from "components/dashBoard/weekBarChartBox/weekBarChartBox"
import TableComponent from "components/Table/TableComponent"
import { FARM_STATUS_COLUMNS } from "constants/table/columns/farm-status"

const Status = () => {
    const statusData = farmStatusData

    return (
        <BaseLayout>
            <MainContainer>
                <TopContainer>
                    <TotalHouseBox />
                    <RightContainer>
                        <HouseCardBox />
                        <WeekBarChartBox />
                    </RightContainer>
                </TopContainer>
                <BottomContainer>
                    <TableComponent title="농장 현황" data={statusData} columns={FARM_STATUS_COLUMNS} />
                </BottomContainer>
            </MainContainer>
        </BaseLayout>
    )
}

export default Status

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    gap: 16px;
`

const TopContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
`

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
`

const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
`
