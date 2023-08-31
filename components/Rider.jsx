'use client';

import { useEffect, useState } from "react";

const AllPackage = ({ data, handleGetPackage }) => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {data&& data.map((info)=>(
                <div key={info._id} className="border flex flex-col p-3 rounded-lg">
                    <div>
                        <p>หัวข้อ : {info.title}</p>
                        <p>ชื่อผู้ส่ง : {info.username}</p>
                        <p>สถานที่รับของ : {info.receiveFrom}</p>
                        <p>สถานที่ส่งของ : {info.sendTo}</p>
                        <p>ข้อมูลพัสดุ : {info.packageInfo}</p>
                    </div>
                    <button className="green_button w-full bottom-1 mt-5">รับงาน</button>
                </div>
            ))}
        </div>
    )
}

const Rider = () => {
    const [ packageData, setPackageData ] = useState([]);
    const fetchPackage = async() => {
        try {
            const res = await fetch('/api/customer/packagedata',{
                method: "GET"
            })
            const jsonData = await res.json();
            setPackageData(jsonData)
        } catch (error) {
            console.log('fetch failed')
        }
    }
    const handleGetPackage = () => {
        /* code รับงาน */
    }
    useEffect(()=>{
        fetchPackage();
    },[])
    return (
        <div>
            <p className="text-2xl font-semibold my-3 text-center">พัสดุทั้งหมด</p>
            <AllPackage 
                handleGetPackage={handleGetPackage}
                data={packageData}
            />
        </div>
    )
}

export default Rider