'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stockDetail = () => {
    const searchParams = useSearchParams();
    const packageId = searchParams.get('id');
    const [ packageDetail ,setPackageDetail ] = useState({
        username: '',
        title:'',
        receiveFrom:'',
        sendTo: '',
        packageInfo: '',
        userPhone: '',
        receiverName: '',
        receiverPhone: '',
    })
    const apiGetData = async() => {
        try {
            const res = await fetch(`/api/customer/packagedata/${packageId.toString()}`,{
                method: "GET"
            })
            const dataJSON = await res.json()
            setPackageDetail(dataJSON)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        apiGetData();
    },[])
    return (
        <div className="grid place-items-center">
            <p className="text-2xl font-semibold mt-6 mb-2">รายละเอียดพัสดุ</p>
            {packageDetail ? (
                <div className="grid grid-cols-2 gap-x-6">
                        <label className="ml-2 block mb-1">ชื่อ-นามสกุล</label>
                        <p>{packageDetail.username}</p>
                        <label className="ml-2 block mb-1">เบอร์โทรศัพท์</label>
                        <p>{packageDetail.userPhone}</p>
                        <label className="ml-2 block mb-1">ชื่อผู้รับ</label>
                        <p>{packageDetail.receiverName}</p>
                        <label className="ml-2 block mb-1">เบอร์โทรศัพท์ผู้รับ</label>
                        <p>{packageDetail.receiverPhone}</p>
                        <label className="ml-2 block mb-1">ประเภทของพัสดุ</label>
                        <p>{packageDetail.title}</p>
                        <label className="ml-2 block mb-1">ที่อยู่ผู้ส่งพัสดุ</label>
                        <p>{packageDetail.receiveFrom}</p>
                        <label className="ml-2 block mb-1">ที่อยู่ผู้รับพัสดุ</label>
                        <p>{packageDetail.sendTo}</p>
                        <label className="ml-2 block mb-1">ข้อมูลพัสดุ</label>
                        <p>{packageDetail.packageInfo}</p>
                </div>
            ):(
                <p>ไม่มีข้อมูล</p>
            )}
        </div>
    )
}

export default stockDetail