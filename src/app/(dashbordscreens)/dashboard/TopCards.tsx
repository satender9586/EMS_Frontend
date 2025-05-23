import React from 'react'

const TopCards = () => {
  return (
    <div className='grid grid-cols-5 gap-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default TopCards



const Card = ()=>{
    return (
        <div className='bg-white border border-[#E5E5E5] rounded-lg shadow-lg p-2 min-h-[170px]'>my Cards</div>
    )
}