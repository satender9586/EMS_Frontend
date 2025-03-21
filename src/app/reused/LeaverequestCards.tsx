import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { RiErrorWarningFill } from "react-icons/ri";
import LeaverequestCardsTables from './LeaverequestCardsTables';


const LeaverequestCards = () => {
    return (
        <div className="min-h-[145px] max-h-[250px] bg-white rounded-lg shadow-md overflow-hidden">
            <h1 className="px-3 py-2 font-semibold text-xl text-[grey] tracking-wide flex items-center space-x-2">
                <RiErrorWarningFill className="text-[grey]" />
                <span className='font-sans font-medium'>Leave Request </span>

            </h1>
            <div className="border-b"></div>

            <div className="max-h-[150px] overflow-y-auto px-3 py-2 space-y-2">
                <LeaverequestCardsTables />
            </div>
        </div>
    )
}

export default LeaverequestCards