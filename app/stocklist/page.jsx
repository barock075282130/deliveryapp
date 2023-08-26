'use client';

import Modal from "@components/Modal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AllStockData = ({ packageInfo, editPackage, deletePackage, status }) => {
    const deleteType =  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
    return (
        <>
        <table className="w-full text-white">
            <thead>
                <tr className="border bg-gray-700">
                    <th scope="col" className="py-2">หัวข้อ</th>
                    <th scope="col">ส่งไปที่</th>
                    <th scope="col">รับของที่</th>
                    <th scope="col">ข้อมูล</th>
                    <th scope="col">แก้ไข</th>
                    <th scope="col">ลบข้อมูล</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {packageInfo && packageInfo.length > 0 ? packageInfo.map((data)=>(
                    <tr key={data._id} className="border bg-gray-400">
                        <th scope="row" className="py-2 ">{data.title}</th>
                        <td>{data.sendTo}</td>
                        <td>{data.receiveFrom}</td>
                        <td>{data.packageInfo}</td>
                        <td>
                            <span
                                className="cursor-pointer text-gray-600 flex justify-center"
                                onClick={()=>editPackage(data._id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                        </td>
                        <td>
                            <Modal 
                                type={deleteType}
                                title='ลบ'
                                handleFunction={()=>deletePackage(data._id)}
                                status={status}
                            />
                        </td>
                    </tr>
                )):(
                    <tr className="border bg-gray-400">
                        <th scope="row" className="py-2 ">ไม่มีข้อมูล</th>
                        <td>ไม่มีข้อมูล</td>
                        <td>ไม่มีข้อมูล</td>
                        <td>ไม่มีข้อมูล</td>
                        <td>ไม่มีข้อมูล</td>
                        <td>ไม่มีข้อมูล</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

const stockList = () => {
    const { data:session } = useSession();
    const permission = session?.user
    const [ packageInfo, setPackageInfo ] = useState([]);
    const [ submit, setSubmit ] = useState(false);
    const router = useRouter();
    const getPackage = async() => {
        try {
            const res = await fetch('/api/customer/packagedata')
            const packageData = await res.json();
            setPackageInfo(packageData)
        } catch (error) {
            console.log('Failed')
        }
    }
    const editPackage = (id) => {
        router.push(`/stocklist/editstock?id=${id}`)
    }
    const deletePackage = async(id) => {
        setSubmit(true)
        try {
            const confirmDelete = await fetch(`/api/customer/packagedata/${id.toString()}`,{
                method: "DELETE"
            })
            if(confirmDelete.ok){
                window.location.reload();
            }
        } catch (error) {
            console.log('Delete failed')
        } finally {
            setSubmit(false)
        }
    }
    useEffect(()=>{
        if(!permission){
            router.push('/')
        }
        getPackage();
    },[permission])
    return (
        <div className="ml-16 duration-300 md:ml-40 w-full">
            {permission ? (
                <AllStockData
                    packageInfo={packageInfo}
                    editPackage={editPackage}
                    deletePackage={deletePackage}
                    status={submit}
                />
            ):(
                <p>กรุณาเข้าสู่ระบบ</p>
            )}
        </div>
    )
}

export default stockList