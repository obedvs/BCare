import { StatisticsChart1 } from './statisticsBars';
import AssetTest from '@/assets/images/zencon.jpg'
import AssetOld from '@/assets/images/assetOldMan.webp'
import SvgPatients from './svgDoctors'
import Table from './table';
import { IoLocationOutline, IoMedical, IoMedkit } from 'react-icons/io5';
import Image from 'next/image';

const PatientDash = () => {
    return (
    <section id='dashdoc' className="relative flex h-full w-full bg-gray-100 overflow-x-hidden">
        <div className='flex flex-col md:grid md:grid-cols-3 mx-[2%] py-4 gap-4 w-full h-full'>
            <div className='flex flex-col md:col-span-2 h-full w-full'>
                <div className='flex w-full h-1/4 bg-purple-700 rounded-3xl text-white overflow-hidden shadow-xl mb-4'>
                    <div className='hidden lg:flex'>
                        <SvgPatients/>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full lg:w-3/4'>
                        <h1 className='text-md sm:text-xl md:text-3xl font-normal mb-2'>Welcome,<span className='font-extrabold'> Mr. Jack White</span></h1>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight'>This is what we have for you today!</h2>
                    </div>
                </div>
                <div className='flex flex-col w-full h-1/4 bg-white rounded-3xl text-black shadow-xl mb-4 px-4 py-2 items-center'>
                    <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Treatment Record</h2>
                    <Table/>
                </div>
                <div className='flex flex-col w-full h-1/4 bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-center justify-center mb-4'>
                    <div className='flex justify-between w-full h-auto px-3 mt-2'>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Doctor Recommendations</h2>
                    </div>
                    <div className='flex justify-between w-full h-auto px-3 my-2'>
                        {/* <h2 className='text-xs sm:text-sm md:text-lg leading-snug tracking-tight'>Surgery: A colectomy to remove the tumor and affected lymph nodes.
                            Chemotherapy: Adjuvant chemotherapy (FOLFOX or CAPOX) after surgery to target any remaining cancer cells.
                            Radiation (sometimes): If the cancer is near other organs or structures.
                            Targeted therapy: If specific genetic mutations are present, targeted drugs may be considered.
                            Clinical trials: Participation may be an option, especially for advanced cases.
                            Regular follow-up: Surveillance to monitor for recurrence.
                            Lifestyle: Adopt a healthy lifestyle, including diet and exercise.</h2> */}
                        <h2 className='text-xs sm:text-sm md:text-lg leading-snug tracking-tight'>
                            Eat less fat
                        </h2>
                    </div>
                </div>
                <div className='flex flex-col w-full h-1/4 bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-center justify-center'>
                    <div className='flex justify-between w-full h-auto px-3 mt-2'>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Extra Information</h2>
                    </div>
                    <div className='flex justify-between w-full h-auto px-3 my-2'>
                        <h2 className='text-xs sm:text-sm md:text-lg leading-snug tracking-tight'>Surgery: A colectomy to remove the tumor and affected lymph nodes.
                            Chemotherapy: Adjuvant chemotherapy (FOLFOX or CAPOX) after surgery to target any remaining cancer cells.
                            Radiation (sometimes): If the cancer is near other organs or structures.
                            Targeted therapy: If specific genetic mutations are present, targeted drugs may be considered.
                            Clinical trials: Participation may be an option, especially for advanced cases.
                            Regular follow-up: Surveillance to monitor for recurrence.
                            Lifestyle: Adopt a healthy lifestyle, including diet and exercise.</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:col-span-1 h-full w-full'>
                <div className='flex flex-col w-full h-1/3 bg-white rounded-3xl shadow-xl px-4 py-2 items-center mb-4'>
                    <div className='grid grid-cols-3 items-center justify-around w-full h-2/3'>
                        <div className='col-span-1 flex justify-center'>
                            <Image src={AssetOld} alt="profile" className='col-span-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover' />
                        </div>
                        <div className='col-span-2 flex flex-col w-full items-center px-2'>
                            <h2 className='h-full text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight'>Mr. Jack White</h2>
                            <div className='flex justify-center items-center h-auto w-full font-medium mt-4 mb-2'>
                                <div className='flex w-1/2 justify-center h-auto'>
                                    <h2 className='text-xs sm:text-sm md:text-base text-gray-600'>Age <span className='text-[#2292F4]'>|</span> 68</h2>
                                </div>
                                <div className='flex w-1/2 justify-center h-auto'>
                                    <h2 className='text-xs sm:text-sm md:text-base text-gray-600'>SSN <span className='text-[#2292F4]'>|</span> 876-54-3210</h2>
                                </div>
                            </div>
                            <div className='flex justify-center items-center h-auto w-full  font-medium'>
                                <h2 className='text-xs sm:text-sm md:text-base text-gray-600'>Type of cancer <span className='text-[#2292F4]'>|</span> Colon</h2>
                            </div>
                            <div className='flex justify-center items-center h-auto w-full  font-medium'>
                                <h2 className='text-xs sm:text-sm md:text-base text-gray-600'>Stage <span className='text-[#2292F4]'>|</span> 3</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around h-1/3 w-full text-center font-medium items-center text-white'>
                        <div className='flex flex-col w-1/5 h-[75%] items-center justify-center text-center bg-[#2292F4] rounded-xl'>
                            <h2 className='text-xs md:text-sm'>Height</h2>
                            <h2 className='text-sm sm:text-base md:text-lg'>172cm</h2>
                        </div>
                        <div className='flex flex-col w-1/5 h-[75%] items-center justify-center text-center bg-[#2292F4] rounded-xl'>
                            <h2 className='text-xs md:text-sm'>Weight</h2>
                            <h2 className='text-sm sm:text-base md:text-lg'>84kg</h2>
                        </div>
                        <div className='flex flex-col w-1/5 h-[75%] items-center justify-center text-center bg-[#2292F4] rounded-xl'>
                            <h2 className='text-xs md:text-sm'>Blood Type</h2>
                            <h2 className='text-sm sm:text-base md:text-lg'>A-</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto sm:h-1/3 bg-[#7747E3] rounded-3xl px-4 text-white shadow-xl mb-4 items-center'>
                    <div className='flex items-center justify-around w-full h-1/2'>
                        {/* <div className='h-full w-1/3'></div> */}
                        <Image src={AssetTest} alt="profile" className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover' />
                        <div className='flex flex-col w-1/2 items-start'>
                            <h2 className='h-full text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight'>Dr. Zencon Rio 2023</h2>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Oncologist</h2>
                            <div className='flex items-center'>
                                <IoLocationOutline size={20} color='#34A5AB'/><h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight'>Mexico City</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center h-1/3 w-full text-white'>
                        <h2 className='text-base sm:text-lg md:text-2xl font-bold'>Next appointment</h2>
                        <div className='flex w-full h-full justify-around'>
                            <div className='flex flex-col w-full h-full'>
                                <h2 className='text-sm sm:text-base md:text-lg'>Monday, September 25</h2>
                                <h2 className='text-sm sm:text-base md:text-lg'>10: AM to 11: AM</h2>
                            </div>
                            <div className='flex flex-col w-full h-full'>
                                <h2 className='text-sm sm:text-base md:text-lg'>1234 B Street , Suite 65</h2>
                                <h2 className='text-sm sm:text-base md:text-lg'>San Diego, CA 92102</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-1/3 bg-[#34A5ABB3] rounded-3xl text-white shadow-xl px-4 py-4 items-center justify-center'>
                    <h2 className='text-base sm:text-lg md:text-2xl font-bold'>Medicine</h2>
                    <div className='flex w-full h-auto justify-around items-center'>
                        <div className='flex flex-col w-full h-full pl-4 items-center justify-center'>
                            <h2 className='text-sm sm:text-base font-semibold md:text-xl'>1.-Capecitabine</h2>
                            <h2 className='text-sm sm:text-base font-semibold md:text-xl'>2.-Oxaliplatin</h2>
                            <h2 className='text-sm sm:text-base font-semibold md:text-xl'>3.-Irinotecan</h2>
                            <h2 className='text-sm sm:text-base font-semibold md:text-xl'>4.-Regorafenib</h2>
                        </div>
                        <div className='flex w-full h-auto justify-center items-center'>
                            <IoMedkit className='w-2/3 h-auto'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default PatientDash;