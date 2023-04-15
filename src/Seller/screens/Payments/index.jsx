import React from 'react'

import PaymentTable from '../../components/Reports/PaymentTable'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'

import { paymentHeader, paymentList } from '../../config/paymentData'

import './style.css'

function Payments() {
  return (
    <div className='screen d-flex justify-content-center'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='payments d-flex flex-column'>
        <div className='payments-search my-4'>
          <SearchBar />
        </div>
        <div className='payments-report'>
          <PaymentTable listData={paymentList} tableHeader={paymentHeader} check paymentCheck />
        </div>
      </div>
    </div>
  )
}

export default Payments
