import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

const AnnouncementsCards = () => {
    return (
        <div className=" hover:shadow-xl transition-all min-h-[120px] max-h-[250px] bg-white rounded-lg shadow-md overflow-hidden">
            <h1 className="px-3 py-2 font-semibold text-xl text-[#465FFF] tracking-wide flex items-center space-x-2">
                <GrAnnounce className="text-[#008AFF]" />
                <span className='font-sans font-medium text-[#008AFF]'>Announcements </span>
                <span className='font-sans text-[13px] font-normal text-red-500'>(1 new)</span>
            </h1>
            <div className="border-b"></div>

            <div className="max-h-[150px] overflow-y-auto px-3 py-2 space-y-2">
                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>

                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>

                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>

                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>
                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>
                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>
                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>
                <div className="flex items-start space-x-2">
                    <GoArrowRight size={20} />
                    <span className='font-sans text-sm'>
                        Announcement: Tomorrow we are going on a company trip. Please wear new clothes!
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementsCards;
