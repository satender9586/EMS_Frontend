import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

const AnnouncementsCards = () => {
    return (
        <div className="">
            <div className="flex items-center gap-2 px-4 py-2 border-b">
                <GrAnnounce className="text-[#008AFF] text-xl" />
                <h2 className="text-[#008AFF] font-semibold text-lg font-sans">
                    Announcements
                </h2>
                <span className="text-sm text-red-500 font-normal">(1 new)</span>
            </div>
            <div className="max-h-[140px] overflow-y-auto px-4 py-3 space-y-1 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                        <GoArrowRight className="text-gray-600 mt-[2px]" />
                        <p>
                            Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementsCards;
