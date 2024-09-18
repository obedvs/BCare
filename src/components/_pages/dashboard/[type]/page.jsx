'use client'

import DoctorDash from '@/components/dashboard/components-doctor/main';
import PatientDash from '@/components/dashboard/components-patient/main';

import { IoLogOutOutline, IoSettingsOutline, IoNotificationsOutline, IoPeopleOutline, IoCalendarOutline } from 'react-icons/io5';
import BCareW from '@/assets/images/bcarew.webp'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

const elements = [
  {
    icon: <Image src={BCareW} alt="bcare" className="w-6 h-6 select-none" />,
  },
  {
    icon: <IoNotificationsOutline size={24}/>,
  },
  {
    icon: <IoPeopleOutline size={24}/>,
  },
  {
    icon: <IoCalendarOutline size={24}/>,
  },
  {
    icon: <IoSettingsOutline size={24}/>,
  },
]

const Dashboard = ({ params }) => {
  const router = useRouter();
  const { type } = params;

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="relative flex flex-col items-center h-auto w-auto bg-[#34A5AB] text-white px-2">
        <div className="flex h-full flex-col justify-center">
          {elements.map((item, index) => (
            <button key={index} type='button' className='rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A]' disabled>
              <div className="flex justify-center items-center">{item.icon}</div>
            </button>
          ))}
        </div>
        <div className="flex h-auto flex-col justify-center">
          <Link href="/" className='rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] active:bg-[#6DFFD680]'>
            <div className="flex justify-center items-center"><IoLogOutOutline size={24}/></div>
          </Link>
        </div>

      </div>
      <div className="w-full h-auto overflow-hidden">
        {type === 'doctor' ? <DoctorDash/> : type === 'patient' ? <PatientDash/> : () => router.push('/') }
      </div>
    </div>
  );
}

export default Dashboard;