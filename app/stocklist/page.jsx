'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AllStockData = ({ packageInfo, editPackage }) => {
    return (
        <div className="grid grid-cols-6 text-center">
            {packageInfo && packageInfo.length > 0 ? packageInfo.map((data)=>(
                <div key={data._id} className="border py-2">
                    <p>{data.username}</p>
                    <p>{data.receiveFrom}</p>
                    <p>{data.sendTo}</p>
                    <p>{data.packageInfo}</p>
                    <div className="flex justify-between px-3 mt-2">
                        <span 
                            className="text-blue-600 cursor-pointer"
                            onClick={()=>editPackage(data._id)}
                        >แก้ไข</span>
                        <span className="text-red-600 cursor-pointer">ลบ</span>
                    </div>
                </div>
            )):(
                <p>ไม่มีพัสดุ</p>
            )}
        </div>
    )
}

const stockList = () => {
    const { data:session } = useSession();
    const permission = session?.user
    const [ packageInfo, setPackageInfo ] = useState([]);
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
                />
            ):(
                <p>กรุณาเข้าสู่ระบบ</p>
            )}
        </div>
    )
}

export default stockList