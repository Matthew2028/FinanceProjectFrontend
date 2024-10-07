import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stocks"
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>FinShark Desgin Page</h1>
    <h2>This is a design page.</h2>
    <RatioList data={testIncomeStatementData} config={tableConfig} />
    <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  )
}

export default DesignPage