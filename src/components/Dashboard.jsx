import React from 'react'
import Dashboardstatsgrid from './Dashboardstatsgrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4 justify-center'>
      <Dashboardstatsgrid />
      <div className='grid sm:flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='grid sm:flex flex-row gap-4 w-full'>
        <RecentOrders />
        <PopularProducts />
      </div>

    </div>
  )
}

export default Dashboard