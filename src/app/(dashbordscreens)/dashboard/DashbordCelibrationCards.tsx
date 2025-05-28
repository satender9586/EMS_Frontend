import React from 'react';
import { GrAnnounce } from "react-icons/gr";

const DashbordCelibrationCards = () => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-full max-h-[300px] overflow-hidden">
          
            <div className="flex items-center px-4 py-3 border-b">
                <h2 className="text-[#008AFF] font-semibold text-sm font-sans">
                    Celebration This Month
                </h2>
            </div>

          
            <div className="max-h-[240px] overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between text-sm font-sans text-gray-700"
                    >
                        <span>Amit Birthday</span>
                        <GrAnnounce className="text-[#008AFF]" size={18} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashbordCelibrationCards;
