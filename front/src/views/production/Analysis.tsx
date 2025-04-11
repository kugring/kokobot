import TableComponent from 'components/Table/TableComponent'
import BaseLayout from 'layouts/BaseLayout'
import eggWeightAnalysis from 'mocks/egg-weight-analysis.json'
import { EGG_WEIGHT_ANALYSIS_COLUMNS } from 'constants/table/columns/egg-weight-analysis'
import eggProductionByAge from 'mocks/egg-production-by-age.json'
import { EGG_PRODUCTION_BY_AGE_COLUMNS } from 'constants/table/columns/egg-production-by-age'
import styled from 'styled-components'
import { EGG_PRODUCTION_PERFORMANCE_COLUMNS } from 'constants/table/columns/egg-production-performance'
import eggProductionPerformance from 'mocks/egg-production-performance.json'
const Analysis = () => {


  return (
    <BaseLayout>
        <Container>
            <TableComponent title="산란 난중 분석" data={eggWeightAnalysis} columns={EGG_WEIGHT_ANALYSIS_COLUMNS} />
            <TableComponent title="산란 주령별 분석" data={eggProductionByAge} columns={EGG_PRODUCTION_BY_AGE_COLUMNS} />
            <TableComponent title="산란 생산성 분석" data={eggProductionPerformance} columns={EGG_PRODUCTION_PERFORMANCE_COLUMNS} />
        </Container>
    </BaseLayout>
  )
}
// todo: 생산분석 width값 임시로 지정한거임
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 	 1720px;
    gap: 20px;
`

export default Analysis