'use client'

import { useState } from 'react';

import { StatisticsChart1 } from './statisticsBars';
import AssetTest from '@/assets/images/zencon.jpg'
import AssetOld from '@/assets/images/assetOldMan.webp'
import SvgDoctors from './svgDoctors'
import Table from './table';
import Modal from 'react-modal';
import { IoClose, IoLocationOutline, IoSend, IoSendOutline } from 'react-icons/io5';
import Image from 'next/image';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '66%',
      height: '60%',
      borderRadius: '20px'
    },
  };

const DoctorDash = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [area, setArea] = useState('Eat less fat');
    const [wallet, setWallet] = useState('0x617F2E2fD72FD9D5503197092aC168c91465E7f2');
    const [date, setDate] = useState('20/09/2023');
    const [medicine, setMedicine] = useState('medicine1, medicine2');
    const [procedure, setProcedure] = useState('chemotherapy');
    const [analysis, setAnalysis] = useState('blood');

    const onAreaChange = ({target}) => setArea(target.value);
    const onWalletChange = ({target}) => setWallet(target.value);
    const onDateChange = ({target}) => setDate(target.value);
    const onMedicineChange = ({target}) => setMedicine(target.value);
    const onProcedureChange = ({target}) => setProcedure(target.value);
    const onAnalysisChange = ({target}) => setAnalysis(target.value);

    const handleSubmit = () => {

    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
    <section id='dashdoc' className="relative flex h-full w-full bg-gray-100 overflow-x-hidden">
        <div className='flex flex-col md:grid md:grid-cols-3 mx-[2%] py-4 gap-4 w-full h-full'>
            <div className='flex flex-col md:col-span-2 h-full w-full'>
                <div className='flex w-full h-1/4 bg-purple-700 rounded-3xl text-white overflow-hidden shadow-xl mb-4'>
                    <div className='hidden lg:flex'>
                        <SvgDoctors/>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full lg:w-3/4'>
                        <h1 className='text-md sm:text-xl md:text-3xl font-normal mb-2'>Welcome,<span className='font-extrabold'> Dr. Zencon Rio 2023</span></h1>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight'>Have a nice day at work!</h2>
                    </div>
                </div>
                <div className='flex flex-col w-full h-1/4 bg-white rounded-3xl text-black shadow-xl mb-4 px-4 py-2 items-center'>
                    <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Statistics of queries of the month</h2>
                    <StatisticsChart1/>
                </div>
                <div className='flex flex-col w-full h-auto sm:h-1/2 bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-center'>
                    <div className='flex justify-between w-full h-auto px-3 my-2'>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Patients</h2>
                        
                            <button onClick={openModal} className='h-auto w-auto px-4 rounded-xl font-bold text-white text-center bg-[#2292F4]'>Next Consult</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Add Information Modal"
                                ariaHideApp={false}
                                shouldCloseOnOverlayClick={true}
                                shouldCloseOnEsc={true}
                                
                            >
                                <form className='h-full w-full' action='#'>
                                    <div className='w-full flex h-[55px] px-4 justify-between items-center'>
                                        <div>
                                            <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Add Information</h2>
                                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight'>This information will be sent to the hospital for review.</h2>
                                        </div>
                                        {/* <button onClick={closeModal} className='flex items-center'><IoClose color='black' size={'30'}/></button> */}
                                    </div>
                                    <div className='grid grid-cols-2 w-full h-[75%] mb-4'>
                                        <div className='flex flex-col w-full h-full col-span-1 mr-1'>
                                            <div className='flex flex-col w-full h-1/2 bg-white rounded-3xl shadow-xl px-4 py-2 items-center mb-2'>
                                                <div className='grid grid-cols-3 items-center justify-around w-full h-2/3'>
                                                    {/* <div className='h-full w-1/3'></div> */}
                                                    <div className='col-span-1 flex justify-center'>
                                                        <Image src={AssetOld} alt="profile" className='col-span-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover' height={330} width={344}/>

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
                                                            <h2 className='text-xs sm:text-sm md:text-base text-gray-600'>Phone Number <span className='text-[#2292F4]'>|</span> (629) 456-0987</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-around h-1/3 w-full text-center font-medium items-center'>
                                                        <div className='flex flex-col w-1/2 h-full items-center justify-start text-center'>
                                                            <h2 className='text-sm sm:text-base md:text-lg text-gray-600'>Type of cancer</h2>
                                                            <h2 className='text-sm sm:text-base md:text-lg text-gray-600'>Colon</h2>
                                                        </div>
                                                        {/* <div className='h-full w-[1px] bg-gray-400'></div> */}
                                                        <div className='flex flex-col w-1/2 h-full items-center justify-start text-center'>
                                                            <h2 className='text-sm sm:text-base md:text-lg text-gray-600'>Stage</h2>
                                                            <h2 className='text-sm sm:text-base md:text-lg text-gray-600'>3</h2>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col col-span-1 w-full h-1/2 px-2 py-2 items-center justify-center'>
                                                <h2 className='text-sm sm:text-base md:text-lg font-bold text-gray-600 self-start mb-2'>Medical Recomendations</h2>
                                                <textarea type="text" value={area} onChange={onAreaChange} className='w-full h-full focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium' placeholder='Your text here'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-full h-full col-span-1 ml-1'>
                                            <div className='flex flex-col col-span-1 w-full h-full px-2 py-2 items-center justify-center'>
                                                <input type="text" value={wallet} onChange={onWalletChange} placeholder='Patient Wallet' className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium mb-3'/>
                                                <input type="text" value={date} onChange={onDateChange} className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium mb-3'/>
                                                {/* <input type="time" value='' className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded font-medium mb-3'/> */}
                                                <input type="text" value={medicine} onChange={onMedicineChange} placeholder='Medicine' className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium mb-3'/>
                                                <input type="text" value={procedure} onChange={onProcedureChange} placeholder='Procedure' className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium mb-3'/>
                                                <input type="text" value={analysis} onChange={onAnalysisChange} placeholder='Analysis' className='w-3/4 p-2 h-auto focus:ring-[#2292F4] focus:ring-2 bg-gray-200 border-0 rounded-lg font-medium mb-3'/>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center text-center text-white'>
                                        <button className='bg-[#2292F4] py-2 px-4 flex justify-between items-center text-center w-48 rounded-lg font-bold'>Send Information <IoSend/></button>
                                    </div>
                                </form>
                            </Modal>
                        <input type="text" className='bg-gray-200 h-full w-2/3 rounded-xl border-0 text-xs sm:text-sm md:text-base' placeholder='Search'/>
                    </div>
                    <Table/>
                </div>
            </div>
            <div className='flex flex-col md:col-span-1 h-full w-full'>
                <div className='flex flex-col w-full h-auto sm:h-1/3 bg-white rounded-3xl text-black shadow-xl mb-4 px-4 py-2 items-center'>
                    <div className='flex items-center justify-around w-full h-2/3'>
                        {/* <div className='h-full w-1/3'></div> */}
                        <Image src={AssetTest} alt="profile-test" className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover' width={301} height={301}/>
                        <div className='flex flex-col w-1/2 items-start'>
                            <h2 className='h-full text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight'>Dr. Zencon Rio 2023</h2>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Oncologist</h2>
                            <div className='flex items-center'>
                                <IoLocationOutline size={20} color='#34A5AB'/><h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight'>Mexico City</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between h-1/3 w-full'>
                        <div className='flex flex-col w-1/2 h-full items-center justify-center text-center'>
                            <h2 className='text-sm sm:text-base md:text-lg text-gray-400'>Today's Quotes</h2>
                            <h2 className='text-sm sm:text-base md:text-lg text-[#34A5AB]'>10</h2>

                        </div>
                        <div className='h-full w-[1px] bg-gray-400'></div>
                        <div className='flex flex-col w-1/2 h-full items-center justify-center text-center'>
                            <h2 className='text-sm sm:text-base md:text-lg text-gray-400'>Working Hours</h2>
                            <h2 className='text-sm sm:text-base md:text-lg text-[#34A5AB]'>9am - 3pm</h2>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto sm:h-1/6 bg-white rounded-3xl text-black shadow-xl mb-4 items-center'>
                    <div className='flex items-center justify-center w-full h-auto py-2 bg-[#562CB4B3] rounded-t-3xl'>
                        <h2 className='text-sm sm:text-base md:text-lg text-white'>September</h2>
                    </div>
                    <div className='flex justify-center items-center h-full w-full bg-[#562CB4] rounded-b-3xl overflow-hidden'>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>17</h2>
                            <h2>Su</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>18</h2>
                            <h2>Mo</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>19</h2>
                            <h2>Tu</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>20</h2>
                            <h2>We</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 bg-[#34A5AB] text-sm sm:text-base md:text-lg font-bold text-[#562CB4] rounded-xl'>
                            <h2>21</h2>
                            <h2>Th</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>22</h2>
                            <h2>Fr</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>23</h2>
                            <h2>Sa</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>24</h2>
                            <h2>Su</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>25</h2>
                            <h2>Mo</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-c'>
                    <div className='flex justify-between px-6 mt-2 items-center'>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold ml-2'>Patients List</h2>
                        <select name="" id="" className='h-auto w-1/3 border-0 bg-transparent text-gray-400 text-end'>
                            <option value="today">Today</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-between w-full h-full px-4 mb-2 overflow-hidden'>
                        <div className='flex rounded-full border-2 border-[#6DFFD6F0] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#6DFFD6F0] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>JW</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Jack White</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>8:15 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#562CB499] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#562CB499] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>AD</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Amy Dunham</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Routine Checkup</h2>
                        </div>
                        <div className='flex bg-[#562CB4] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>8:30 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#34A5ABA8] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#34A5ABA8] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>DJ</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Demi Joan</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Report</h2>
                        </div>
                        <div className='flex bg-[#128983] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>8:50 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#58B0E0CC] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#58B0E0CC] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>SM</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Susan Myers</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>9:15 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#6DFFD6F0] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#6DFFD6F0] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>SM</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Stacy Mitchell</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>9:30 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#562CB499] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#562CB499] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>AD</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Amy Dunham</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Routine Checkup</h2>
                        </div>
                        <div className='flex bg-[#562CB4] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-xs sm:text-sm md:text-base font-medium text-white'>8:30 AM</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default DoctorDash;