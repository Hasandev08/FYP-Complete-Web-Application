import React from 'react'

import './style.css'

function ApprovalsTable({ listData, tableHeader }) {
  return (
    <>
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
                <th scope='row'>{item.id}</th>
                <td>{item.customer_name}</td>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.r_price}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ApprovalsTable
