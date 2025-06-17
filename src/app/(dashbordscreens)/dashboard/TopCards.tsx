import React from 'react';

const TopCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default TopCards;


const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 min-h-[140px] flex flex-col justify-between">
      <div className="text-gray-700 font-semibold text-sm">My Card Title</div>
      <div className="text-xl font-bold text-[#008AFF]">42</div>
      <div className="text-gray-400 text-xs">Updated just now</div>
    </div>
  );
};
