import BalanceDirectionDiagram from './BalanceDirectionDiagram.jsx'
import DisbursementOptionsDiagram from './DisbursementOptionsDiagram.jsx'
import BalanceGrowthChart from './BalanceGrowthChart.jsx'
import NonRecourseDiagram from './NonRecourseDiagram.jsx'
import ProcessFlowDiagram from './ProcessFlowDiagram.jsx'
import PrincipalLimitWaterfall from './PrincipalLimitWaterfall.jsx'
import RateStackDiagram from './RateStackDiagram.jsx'
import ProgramFlowDiagram from './ProgramFlowDiagram.jsx'
import MaturityPathsDiagram from './MaturityPathsDiagram.jsx'
import SuitabilityDiagram from './SuitabilityDiagram.jsx'
import EquityGapDiagram from './EquityGapDiagram.jsx'

const diagrams = {
  balanceDirection: BalanceDirectionDiagram,
  equityGap: EquityGapDiagram,
  disbursementOptions: DisbursementOptionsDiagram,
  balanceGrowth: BalanceGrowthChart,
  nonRecourse: NonRecourseDiagram,
  processFlow: ProcessFlowDiagram,
  principalLimit: PrincipalLimitWaterfall,
  rateStack: RateStackDiagram,
  programFlow: ProgramFlowDiagram,
  maturityPaths: MaturityPathsDiagram,
  suitability: SuitabilityDiagram,
}

export default diagrams
