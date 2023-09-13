'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AllPackage = ({ data, handleGetPackage, submit }) => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {data && data.map((info)=>(
                <div key={info._id} className="border flex flex-col p-3 rounded-lg">
                    <div>
                        <p>หัวข้อ : {info.title}</p>
                        <p>ชื่อผู้ส่ง : {info.username}</p>
                        <p>สถานที่รับของ : {info.receiveFrom}</p>
                        <p>สถานที่ส่งของ : {info.sendTo}</p>
                    </div>
                    <button 
                        className="green_button w-full bottom-1 mt-5" 
                        onClick={()=>handleGetPackage(info._id)}>
                            {submit ? 'กำลังรับงาน...' : 'รับงาน'}
                    </button>
                </div>
            ))}
        </div>
    )
}

const Rider = ({ userDataRole }) => {
    const [ packageData, setPackageData ] = useState(null);
    const [ submit, setSubmit ] = useState(false)
    const router = useRouter();
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
    const handleGetPackage = async(id) => {
        setSubmit(true)
        try {
            // const recievePackage = await fetch(`/api/rider/packagedata/recieve`,{
            //     method: "POST",
            //     body: JSON.stringify({
            //         packageId: id,
            //         riderId: userDataRole?._id
            //     })
            // })
            const updatePackage = await fetch(`/api/rider/packagedata/recieve`,{
                method: "PATCH",
                body: JSON.stringify({
                    packageId: id,
                    hidePackage: 'รับ',
                    riderId: userDataRole?._id
                })
            })
            if(updatePackage.ok){
                router.push('/stocklist')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmit(false)
        }
    }
    useEffect(()=>{
        fetchPackage();
    },[])
    return (
        <div>
            <p className="text-2xl font-semibold my-3 text-center">พัสดุทั้งหมด</p>
            {packageData&&packageData.length === 0&&(
                <p className="text-center">ไม่มีพัสดุ</p>
            )}
            <AllPackage 
                handleGetPackage={handleGetPackage}
                data={packageData}
                submit={submit}
            />
        </div>
    )
}

export default Rider