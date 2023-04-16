import React from 'react'

import ApprovalsTable from '../../components/Tables/ApprovalsTable'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'

import { approvalData, approvalHeader } from '../../config/approvalData'

import './style.css'

const Approvals = () => {
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='approvals d-flex flex-column w-100'>
        <div className='approvals-search w-100 my-4'>
          <SearchBar />
        </div>
        <div className='approvals-table'>
          <ApprovalsTable listData={approvalData} tableHeader={approvalHeader} />
        </div>
      </div>
    </div>
  )
}

export default Approvals
