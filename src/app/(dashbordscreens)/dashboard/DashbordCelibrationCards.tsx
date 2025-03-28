import React from 'react';
import { GrAnnounce } from "react-icons/gr";


const DashbordCelibrationCards = () => {
    return (
        <div className=" hover:shadow-xl border border-[#E5E5E5] min-h-[100%] max-h-[250px] bg-white rounded-lg shadow-md overflow-hidden">
            <h1 className="px-3 py-2 font-semibold text-sm  tracking-wide flex items-center space-x-2">
                <span className='font-sans font-medium text-[#008AFF]'>Celebration This Month </span>

            </h1>
            <div className="border-b"></div>

            <div className="max-h-[150px] overflow-y-auto px-3 py-2 space-y-2">
                <div className="flex items-start justify-between space-x-2">
                    <span className='font-sans text-sm '>
                       Amit Birth Day
                    </span>
                    <GrAnnounce size={20} className='text-[#008AFF]' />
                </div>
                <div className="flex items-start justify-between space-x-2">
                    <span className='font-sans text-sm '>
                       Amit Birth Day
                    </span>
                    <GrAnnounce size={20} className='text-[#008AFF]' />
                </div>
            </div>
        </div>
    )
}

export default DashbordCelibrationCards