import React, { useState } from 'react'

import ApprovalsTable from '../../components/Tables/ApprovalsTable'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'

import { approvalData, approvalHeader } from '../../config/approvalData'

import './style.css'

const Approvals = () => {
  const [filterProductData, setFilterProductData] = useState(approvalData)

  const handleChange = (val) => {
    const filteredData = approvalData.filter(
      (item) =>
        item.product_name.toLowerCase().includes(val.toLowerCase()) ||
        item.customer_name.toLowerCase().includes(val.toLowerCase())
    )
    setFilterProductData(filteredData)
  }
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='approvals d-flex flex-column w-100'>
        <div className='approvals-search w-100 my-4'>
          <SearchBar handleChange={handleChange} />
        </div>
        <div className='approvals-table container-fluid'>
          <ApprovalsTable listData={filterProductData} tableHeader={approvalHeader} />
        </div>
      </div>
    </div>
  )
}

export default Approvals
