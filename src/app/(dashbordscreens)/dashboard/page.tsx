
import Layout from '@/app/common/Layout'
import DashbordCards from '@/app/reused/DashbordCards'
import AnnouncementsCards from '@/app/reused/AnnouncementsCards'
import LeaverequestCards from '@/app/reused/LeaverequestCards'
import DashbordCelibrationCards from '@/app/reused/DashbordCelibrationCards'

const Dashboard = () => {
  return (
    <Layout>
      <div className='grid grid-cols-5 rounded-sm h-[100%] gap-2 bg-[#FAFAFA] border  border-[#E5E5E5] p-3'>
        <DashbordCards />
        <DashbordCards />
        <DashbordCards />
        <DashbordCards />
        <DashbordCards />
        <div className='col-start-1 col-end-5'>
          <div className='   bg-white border border-[#E5E5E5] rounded-lg shadow-lg '>
            <AnnouncementsCards />
          </div>
          <div className='mt-2 bg-white border border-[#E5E5E5] rounded-lg shadow-lg '>
            <LeaverequestCards />
          </div>
        </div>
        <div>
          <DashbordCelibrationCards/>
        </div>
      </div>
    </Layout>

  )
}

export default Dashboard