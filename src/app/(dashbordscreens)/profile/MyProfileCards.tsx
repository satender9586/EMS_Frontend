import React from 'react'

const MyProfileCards = () => {
    return (
        <div className=''>
            <div className='shadow rounded-sm bg-white'>
                <div className='flex gap-1 items-center  hover:shadow-xl '>
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
            <div className='grid grid-cols-2 my-3 gap-3 '>
                <div className='shadow p-3 hover:shadow-xl bg-white rounded-sm'>
                    <h1 className='font-[popplins]   text-[18px] font-[600] text-[#212121]'>Personal Details</h1>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Personal Mobile</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>9810411724</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Personal Email</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>finogel725@erapk.com</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464]'>Date of Join</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>25/04/2022</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Blood Group</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Date of Birth</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>
                        25/04/2022</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Gender</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>Male</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Reporting To</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>Anamika Thakur</h1></div>
                    </div>                
                </div>
                <div className='shadow p-3 hover:shadow-xl bg-white rounded-sm'>
                    <h1 className='font-[popplins]   text-[18px] font-[600] text-[#212121]'>Address</h1>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Permanent Address</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Present Address</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464]'>City</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>25/04/2022</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>State</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Country</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>
                        25/04/2022</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Zipcode</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Nationality</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>                
                </div>
            </div>
            <div className='grid grid-cols-2  gap-3 '>
                <div className='shadow p-3 hover:shadow-xl bg-white rounded-sm'>
                    <h1 className='font-[popplins]   text-[18px] font-[600] text-[#212121]'>Other Details</h1>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Passport Number</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Bank Name</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464]'>Account Number</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>IFSC Number</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                        
                </div>
                <div className='shadow p-3 hover:shadow-xl bg-white rounded-sm'>
                    <h1 className='font-[popplins]   text-[18px] font-[600] text-[#212121]'>Identity Information</h1>
                    <div className='flex mt-1 items-center'>
                        <div className='min-w-[35%]'>
                            <h1 className='text-[14px] font-[popplins] font-[500] text-[#656464] '>Passport Number</h1>
                        </div>
                        <div><h1 className='text-[14px] font-[popplins] font-[600] text-[#333232] '>-</h1></div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default MyProfileCards