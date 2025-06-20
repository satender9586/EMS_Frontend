"use client"
import React, { useEffect, useState } from 'react';
import { GrAnnounce } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import { retriveAnnoucementsApi } from '@/services/GET_API';
import { birthDayDateFormate, wordCapitalize } from '@/utils/Methods';

const AnnouncementsCards = () => {
    const [announcements, setAnnouncements] = useState<[]>([])

    // Get annoucement api handler

    const retriveAnnoucementsHandler = async () => {
        try {
            const response = await retriveAnnoucementsApi()
            if (response.status === 200) {
                const data = response?.data?.data.reverse() || []
                setAnnouncements(data)
            }
            else {
                setAnnouncements([])
            }
        } catch (error) {
            console.log("error annoucement API : ", error)
        }
    }

    useEffect(() => {
        retriveAnnoucementsHandler()
    }, [])

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-2 px-4 py-2 border-b rounded-t-2xl r bg-gradient-to-r from-[#008AFF] to-[#00C6FF]">
                <GrAnnounce className=" text-white text-xl" />
                <h2 className=" text-white font-semibold text-lg font-sans">
                    Announcements
                </h2>
            </div>
            <div className="min-h-[148px] h-[calc(100%-50px)] overflow-y-auto px-4 py-3 space-y-3 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {announcements.length === 0 ? (
                    <div className="text-gray-500 text-sm font-sans">No upcoming annoucement</div>
                ) : (
                    announcements.map((annoucement: any) => (
                        <div
                            key={annoucement?.announcement_id}
                            className="flex items-center justify-between  text-gray-800 hover:bg-gray-50 px-1  transition-all duration-150"
                        >
                            <div className="flex items-start gap-2 text-[13px] text-gray-700 font-sans">
                                <GoArrowRight className="text-gray-600 mt-[2px]" />
                                <p>
                                    Announcement : {wordCapitalize(annoucement.message)} !
                                </p>
                            </div>
                            <span className="text-gray-500 font-light text-[13px]">
                                {birthDayDateFormate(annoucement.date)}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AnnouncementsCards;
