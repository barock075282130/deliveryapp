'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import StockForm from "@components/StockForm";
import { useSession } from "next-auth/react";

const editStock = () => {
    const { data:session } = useSession();
    const permission = session?.user
    const searchParams = useSearchParams();
    const packageId = searchParams.get('id')
    const router = useRouter();
    const [ confirm, setConfirm ] = useState(false)
    const [ packageInfo, setPackageInfo ] = useState({
        username: '',
        title:'',
        receiveFrom:'',
        sendTo: '',
        packageInfo: '',
        userPhone: '',
        receiverName: '',
        receiverPhone: '',
    });
    const getPackage = async() => {
        try {
            const res = await fetch(`/api/customer/packagedata/${packageId.toString()}`)
            const packagedata = await res.json();
            setPackageInfo(packagedata)
        } catch (error) {
            console.log(error)
        }
    }
    const updateStock = async(e) => {
        setConfirm(true)
        e.preventDefault();
        try {
            const res = await fetch(`/api/customer/packagedata/${packageId.toString()}`,{
                method: "PATCH",
                body: JSON.stringify({
                    username: packageInfo.username,
                    title: packageInfo.title,
                    receiveFrom: packageInfo.receiveFrom,
                    sendTo: packageInfo.sendTo,
                    packageInfo: packageInfo.packageInfo,
                    userPhone: packageInfo.userPhone,
                    receiverName: packageInfo.receiverName,
                    receiverPhone: packageInfo.receiverPhone,
                })
            })
            if(res.ok){
                router.push('/stocklist')
            }
        } catch (error) {
            console.log('Add Order Fail')
        } finally {
            setConfirm(false)
        }
    }
    useEffect(()=>{
        if(!permission){
            router.push('/')
        }
        if(permission) getPackage();
    },[permission])
    return (
        <div className="ml-16 duration-300 md:ml-40">
            {permission ? (
                <StockForm 
                    type='แก้ไข'
                    info={packageInfo}
                    setInfo={setPackageInfo}
                    addStockButton={updateStock}
                    confirm={confirm}
                />
            ):(
                <p>กรุณาเข้าสู่ระบบ</p>
            )}
        </div>
    )
}

export default editStock