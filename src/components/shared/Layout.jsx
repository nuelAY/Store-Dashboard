import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'



function Layout() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="flex flex-row bg-neutral-100 h-full w-full overflow-hidden">
        <Sidebar menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <div className="flex flex-col flex-1">
            <Header/>
            <div className="flex-1 p-4 min-h-0 overflow-auto">
                  {<Outlet />}
            </div>
        </div>
         
    </div>
  )
}

export default Layout