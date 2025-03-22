import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa'; 
import { MdCheckCircleOutline } from 'react-icons/md'; 

const TopCards = () => {
  return (
    <div className= " hover:shadow-xl transition-all bg-white border border-[#E5E5E5] rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-xl text-green-600 tracking-wide flex items-center space-x-2">
          <FaRegCalendarCheck className="text-green-600" />
          <span className='font-["sans-serif"] font-[100] '>Casual Leave</span>
        </h1>

      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-sm font-medium text-gray-600">Total</h2>
          <div className="text-3xl font-semibold text-green-600">10</div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-sm font-medium text-gray-600">Used</h2>
          <div className="text-3xl font-semibold text-gray-600">0</div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center">
          <MdCheckCircleOutline className="text-gray-600 mr-2" />
          <span>Leave Status : Available</span>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
