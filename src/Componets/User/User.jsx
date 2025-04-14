import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { BsFillGiftFill } from 'react-icons/bs'
import { FaArrowLeftLong, FaRegUser, FaUnlockKeyhole } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoLocationOutline, IoWalletOutline } from 'react-icons/io5'
import { Link } from 'react-router'

function User() {
    return (
        <>
            <div className='p-3 block xl:hidden'>
                <div className='flex justify-between items-center'>
                    <Link to={'/'} className='text-2xl'><FaArrowLeftLong /></Link>
                    <div >
                        <p className="font-bold text-[18px]">Delivery in 8 minutes</p>
                        <div className="flex items-center">
                            <p className="text-[12px]">Varachha, Surat, Gujarat, India</p>
                            <p className="ps-1 text-[20px]">
                                <IoMdArrowDropdown />
                            </p>
                        </div>
                    </div>
                </div>


                <div className='pt-9'>
                    <div className='text-[12px] text-gray-500'>Your Information</div>
                    <ul className='pt-5'>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><BiPurchaseTag  /></div>
                            <div>Order History</div>
                        </li>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><IoLocationOutline /></div>
                            <div>Address Book</div>
                        </li>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><IoWalletOutline  /></div>
                            <div>Wallet Details</div>
                        </li>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><BsFillGiftFill   /></div>
                            <div>E-Gift Cards</div>
                        </li>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><FaUnlockKeyhole   /></div>
                            <div>Account Privacy</div>
                        </li>
                        <li className='flex items-center gap-5 pb-7'>
                            <div className='bg-gray-200 w-8 h-8 rounded-[10px] flex justify-center items-center text-[20px]'><FaRegUser   /></div>
                            <div>Log Out</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default User
