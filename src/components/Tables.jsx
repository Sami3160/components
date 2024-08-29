import React, { useEffect } from 'react'
import deleteImg from '../assets/delete.png'
import edit from '../assets/edit.png'
import group from '../assets/group.png'
import { fetchOrders } from './HandleAdminRoutes'
import { useState } from 'react'
import { set } from 'rsuite/esm/internals/utils/date'
import axios from 'axios'
export default function BookingTable() {
    const [tableData, setTableData] = useState([]);
    const [checkedData, setCheckedData] = useState([]);
    useEffect(()=>{
        fetchOrders().then((response)=>{
            setTableData(response);
            // console.log('Orders:',response);
        }).catch((error)=>{
            console.error('Error fetching orders:',error);
        })
    },[])
    return (
        <div className='w-full h-[70vh] flex flex-col '>
            <div className='controls flex justify-end p-2 items-center'>
                <div className="cursor-pointer text-xl font-semibold text-white bg-golden rounded-md p-3 mx-3" style={{boxShadow:'5px 5px 5px 0px rgba(0,0,0,0.34)'}}>
                    Offline Booking
                </div>
                <div className="rounded-xl flex h-full mx-1">
                    <img src={edit} alt="" className='p-[17px] hover:bg-slate-100 cursor-pointer border-[1px] h-12 w-12 bg-slate-50 rounded-l-xl' />
                    <img src={group} alt="" className='p-[17px] hover:bg-slate-100 cursor-pointer border-[1px] h-12 w-12 bg-slate-50' />
                    <img src={deleteImg} alt="" className='p-[17px] hover:bg-slate-100 cursor-pointer border-[1px] h-12 w-12 bg-slate-50 rounded-r-xl' 
                        onClick={()=>{
                            checkedData.map((data)=>{
                                console.log(data.id);
                                axios.delete(`http://localhost:8080/api/aradmin/orders/${data.id}`,{
                                    auth:{
                                        username:'admin',
                                        password:'admin123'
                                    }
                                }).then((res)=>{
                                    console.log(res);
                                }).catch(error=>{
                                    console.log(error);
                                })
                            })
                            fetchOrders().then((response)=>{
                                setTableData(response);
                                // console.log('Orders:',response);
                            }).catch((error)=>{
                                console.error('Error fetching orders:',error);
                            })
                            setCheckedData([]);
                        }}
                    />
                </div>
            </div>
            <div className="w-full overflow-auto text-nowrap">

                <table className='table-fixed min-w-full divide-y divide-gray-200 text-xl'>
                    <thead className=' '>

                        <tr className='font-bold border-b-2 px-2 text-left'>
                            <th className='p-4'>
                                <div className="flex items-center">
                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600  rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left '>
                                ID
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Guest Name
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Address
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                City
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                State
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Phone No.
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Pincode
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Email
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Check In
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Check Out
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Room Book
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                No. Of Rooms
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Extra Amenities
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Children/Adult
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Payement Amount
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Payement Status
                            </th>
                            <th className='py-3 px-6 text-xl font-bold tracking-wider text-left  '>
                                Payement Method
                            </th>

                        </tr>
                    </thead>

                    <tbody className='bg-white divide-y divide-gray-200 '>

                        {tableData.map((item, index) => {
                            return (
                                <tr key={index} className='hover:bg-gray-100 '>
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                                                onChange={(e)=>{
                                                    if(e.target.checked){
                                                        setCheckedData([...checkedData,item]);
                                                        console.log(checkedData);

                                                    }else{
                                                        setCheckedData(checkedData.filter((data)=>data.id!==item.id));
                                                    }
                                                    
                                                }}
                                            />
                                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.id}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.fullName}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.address}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.city}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.state}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.phoneNumber}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.pincode}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.email}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.checkIn}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.checkOut}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.room["roomType"]}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.numberOfRooms}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.extraBed ? 'Yes' : 'No'}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.numChildren + '/' + item.numAdults}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.paymentAmount}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.paymentStatus}
                                    </td>
                                    <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                                        {item.paymentMethod==null?"Cash":item.paymentMethod}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}