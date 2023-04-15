import React from 'react'

import './style.css'

function PaymentTable({ listData, tableHeader }) {
  return (
    <div className='data'>
      <table className='table'>
        <thead>
          <tr>
            {tableHeader.map((item, index) => (
              <th key={index.toString()} scope='col'>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listData.map((item, index) => (
            <tr key={index.toString()}>
              <td>{item.p_id}</td>
              <td>{item.payment_name}</td>
              <td>$ {item.r_price}</td>
              <td>$ {item.s_price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PaymentTable
