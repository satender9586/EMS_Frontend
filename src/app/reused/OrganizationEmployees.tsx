import React from 'react'

const OrganizationEmployees = () => {
    return (
        <div className='p-3'>
            <div className='shadow '>
                <div className='flex gap-1 items-center'>
                    <div className='min-w-[80px] p-2.5'>
                        <div className='bg-[#CCCCCC] w-full min-h-[60px] rounded-full'></div>
                    </div>
                    <div>
                        <h1 className='font-[popplins] font-bold text-[#777777]'>Raj Kumar</h1>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2 '>EMP-20240425-001</h1>
                            <h1 className='font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2'>Admin Department</h1>
                            <h1 className='font-[popplins] text-[#777777] text-sm'>Executive</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2'>+919810411755</h1>
                            <h1 className='font-[popplins] text-[#777777] text-sm'>finogel725@erapk.com</h1>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default OrganizationEmployees