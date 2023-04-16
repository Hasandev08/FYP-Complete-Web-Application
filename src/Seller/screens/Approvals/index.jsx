import React from 'react'

import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'

import './style.css'

const Approvals = () => {
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='approvals d-flex flex-column w-100'>
        <div className='approvals-search my-4'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Approvals
