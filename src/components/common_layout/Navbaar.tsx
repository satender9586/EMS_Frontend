import React from 'react'
import { UserDropdownMenu } from '../popup/UserDropdownMenu'
import { UserNotifcationMenu } from '../popup/UserNotifcationMenu'

const Navbaar = () => {
  return (
    <div className='min-h-[62px] max-h-[62px] grid grid-cols-1 sticky top-0 left-0 bg-[#FAFAFA] border-b border-[#E5E5E5] px-5'>
    
      {/* <div className="flex items-center">
      
      </div> */}

     
      <div className=' flex justify-between sm:justify-between md:justify-between lg:justify-end    items-center gap-3 w-100%'>
        <UserNotifcationMenu />
        <UserDropdownMenu />
      </div>
    </div>
  )
}

export default Navbaar
