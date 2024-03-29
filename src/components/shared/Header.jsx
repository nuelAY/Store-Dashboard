import { React, Fragment } from 'react'
//import { useState } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineMenu, HiOutlineSearch } from 'react-icons/hi'
import { Popover, Transition, Menu} from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/Menucontext'

{/**const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

    burger.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    })
const BurgerMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
}

  const handleBurgerClick = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };**/}


function Header() {
    const navigate = useNavigate()
    const {menuVisible, setMenuVisible} = useUserContext()
  return (
      <div className='w-[24rem] sm:w-full bg-white h-16 px-4 sm:px-4 flex justify-between sm:justify-between  items-center border-b border-gray-200'>
          <div className='px-4 cursor-pointer md:hidden' id='burger'onClick={() => setMenuVisible(!menuVisible)}>
              <HiOutlineMenu fontSize={30} className='text-gray-400'/>
          </div>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[10rem] sm:w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'/>
        </div>
        <div className='flex items-center gap-2 mr-2'>
            <Popover className="relative">
                {({ open }) => (
            <>
                <Popover.Button
                              className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm inline-flex item-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}>
                    <HiOutlineChatAlt fontSize={24} />
                </Popover.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80 mx-[-6rem]'>
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                      <strong className='text-gray-700 font-medium'>Messages!</strong>
                                      <div className='mt-2 py-1 text-sm'>
                                          This is the Messages Panel
                                      </div>
                                
                            </div>
                        </Popover.Panel>
                    </Transition>
            </>)}
              </Popover>
              
              <Popover className="relative">
                {({ open }) => (
            <>
                <Popover.Button
                    className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm inline-flex item-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}>
                    <HiOutlineBell fontSize={24}/>
                </Popover.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80 mx-[-4rem]'>
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                      <strong className='text-gray-700 font-medium'>Notifications!</strong>
                                      <div className='mt-2 py-1 text-sm'>
                                          This is the Notifications Panel
                                      </div>
                                
                            </div>
                        </Popover.Panel>
                    </Transition>
            </>)}
            </Popover>
            <Menu as="div" className="relative">
                <div className='inline-flex'>
                      <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 hover:ring-neutral-400">
                          <span className='sr-only'>Open User Menu</span>
                          <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                            style={{ backgroundImage: 'url("https://source.unsplash.com/80*80?face)' }}>
                            <span className='sr-only'>John Doe</span> 
                        </div>
                    </Menu.Button>
                  </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus-within:outline-none ">
                        
                        <Menu.Item>
                            {({ active }) => (
                                  <div className={classNames(active &&'bg-gray-300', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} 
                                  onClick={() => navigate('/profile')}>
                                      Your Profile
                                  </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                                  <div className={classNames(active &&'bg-gray-300', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} 
                                  onClick={() => navigate('/settings')}>
                                      Settings
                                  </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                                  <div className={classNames(active &&'bg-gray-300', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} 
                                  onClick={() => navigate('/login')}>
                                      Logout
                                  </div>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </div>
  )
}

export default Header