'use client';

import StockTable from "@components/StockTable";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MainStock = () => {
    const { data:session } = useSession();
    const permission = session?.user?.id
    const [ packageInfo, setPackageInfo ] = useState([]);
    const [ submit, setSubmit ] = useState(false);
    const router = useRouter();
    const getPackage = async() => {
        try {
            const res = await fetch(`/api/customer/customerpackage/${permission?._id}`,{
                method: "GET"
            })
            const packageData = await res.json();
            setPackageInfo(packageData)
        } catch (error) {
            console.log('Failed')
        }
    }
    const getRiderPackage = async() => {
        try {
            const res = await fetch(`/api/rider/packagedata/${permission?._id}`,{
                method: "GET"
            })
            const packageData = await res.json();
            setPackageInfo(packageData)
        } catch (error) {
            console.log('Failed')
        }
    }
    const handleViewPackage = (id) => {
        router.push(`/stocklist/stockdetails?id=${id}`)
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
        if(permission?.role === 'rider'){
            getRiderPackage();
        }else{
            getPackage();
        }
    },[permission])
    return (
        <div className="ml-16 duration-300 md:ml-40 w-full">
            {permission ? (
                <StockTable 
                    type={permission?.role !== 'rider'? 'customer' : 'rider'}
                    packageInfo={packageInfo}
                    editPackage={editPackage}
                    deletePackage={deletePackage}
                    handleViewPackage={handleViewPackage}
                    status={submit}
                    role={permission?.role}
                />
            ):(
                <p>กรุณาเข้าสู่ระบบ</p>
            )}
        </div>
    )
}

export default MainStock