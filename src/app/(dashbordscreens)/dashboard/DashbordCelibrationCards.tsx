import React from 'react';
import { GrAnnounce } from "react-icons/gr";

const DashbordCelibrationCards = () => {
    return (
        <div className=" h-[365px] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200  overflow-hidden">
            <div className=" flex items-center gap-2 px-4 py-2 border-b">
                <GrAnnounce className="text-[#008AFF] text-xl" />
                <h2 className="text-[#008AFF] font-semibold text-md font-sans">
                    Celebration 
                </h2>
            </div>

            <div className="max-h-[100%] overflow-y-auto px-4 py-3 space-y-1 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {[...Array(100)].map((_, index) => (
                    <div
                        key={index}
                        className="text-sm font-sans text-gray-700"
                    >
                        <span>Amit Birthday</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashbordCelibrationCards;
