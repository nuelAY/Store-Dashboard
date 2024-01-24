import React from 'react'
import { IoBagHandle, IoPieChartSharp, IoPeopleSharp, IoCartOutline  } from 'react-icons/io5'

function BoxWrapper({children}) {
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-300 flex items-center'>{children}</div>
}

function Dashboardstatsgrid() {
  return (
    <div className='grid sm:flex gap-4 w-[20rem] sm:w-full'>
          <BoxWrapper>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500  hover:bg-gray-400'>
                  <IoBagHandle className= 'text-2xl text-white'/>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$55644.63</strong>
                      <span className='text-sm text-green-500 pl-2'>+123</span>
                  </div>
              </div>
          </BoxWrapper>
          <BoxWrapper>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500  hover:bg-gray-400'>
                  <IoPieChartSharp className= 'text-2xl text-white'/>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$55644.63</strong>
                      <span className='text-sm text-green-500 pl-2'>+123</span>
                  </div>
              </div>
          </BoxWrapper>
          <BoxWrapper>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500  hover:bg-gray-400'>
                  <IoPeopleSharp className= 'text-2xl text-white'/>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$55644.63</strong>
                      <span className='text-sm text-green-500 pl-2'>+123</span>
                  </div>
              </div>
          </BoxWrapper>
          <BoxWrapper className='hover:bg-gray-400'>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500 hover:bg-gray-400'>
                  <IoCartOutline  className= 'text-2xl text-white'/>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$55644.63</strong>
                      <span className='text-sm text-green-500 pl-2'>+123</span>
                  </div>
              </div>
          </BoxWrapper>
    </div>
  )
}

export default Dashboardstatsgrid