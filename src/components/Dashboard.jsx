import React from 'react'
import Dashboardstatsgrid from './Dashboardstatsgrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <Dashboardstatsgrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart/>
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrders />
        <PopularProducts/>
      </div>
      
    </div>
  )
}

export default Dashboard