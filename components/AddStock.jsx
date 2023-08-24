'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StockForm from "./StockForm";

const AddStock = () => {
    const { data:session } = useSession();
    const userData = session?.user?.id?.username
    const router = useRouter();
    const [ info, setInfo ] = useState({
        username: userData,
        receiveFrom: '',
        sendTo:'',
        packageInfo:'',
    })
    const [ confirm, setConfirm ] = useState(false)
    const addStockButton = async(e) => {
        setConfirm(true)
        e.preventDefault();
        try {
            const res = await fetch('/api/customer/packagedata',{
                method: "POST",
                body: JSON.stringify({
                    username: info.username,
                    receiveFrom: info.receiveFrom,
                    sendTo: info.sendTo,
                    packageInfo: info.packageInfo,
                })
            })
            if(res.ok){
                router.push('/')
            }
        } catch (error) {
            console.log('Add Order Fail')
        } finally {
            setConfirm(false)
        }
    }
    useEffect(()=>{
        if(!session?.user){
            router.push('/')
        }
    },[session?.user])
    return (
        <div>
            {session?.user ? (
                <StockForm 
                    type='เพิ่ม'
                    info={info}
                    setInfo={setInfo}
                    addStockButton={addStockButton}
                    confirm={confirm}
                />
            ):(
                <p>Loading....</p>
            )}
            
        </div>
    )
}

export default AddStock