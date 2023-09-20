'use client';

import { useEffect, useState } from "react";

const PackageStatus = ({ userId }) => {
  const [ packageStat ,setPackageStat ] = useState([]);
  const getPackageData = async() => {
    try {
      const res = await fetch(`/api/customer/packagedata/status/${userId}`,{
        method: 'GET'
      })
      const dataJSON = await res.json()
      setPackageStat(dataJSON)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(userId) getPackageData()
  },[userId])
  const packageStatus = [{
    id:'all',
    type: 'ทั้งหมด',
    status: packageStat.all,
    style: 'border-blue-400 bg-blue-400 text-white shadow-lg rounded-lg grid place-items-center p-4 border-2',
  },{
    id:'wait',
    type: 'รอรับของ',
    status: packageStat.wait,
    style: 'border-yellow-400 bg-yellow-400 text-white shadow-lg rounded-lg grid place-items-center p-4 border-2',
  },{
    id:'going',
    type: 'กำลังส่งของ',
    status: packageStat.going,
    style: 'border-orange-400 bg-orange-400 text-white shadow-lg rounded-lg grid place-items-center p-4 border-2',
  },{
    id:'done',
    type: 'ส่งของแล้ว',
    status: packageStat.done,
    style: 'border-green-400 bg-green-400 text-white shadow-lg rounded-lg grid place-items-center p-4 border-2',
  }]
  return (
      <div className="w-full pl-16 md:pl-40">
        <div className="grid grid-cols-4 gap-4 px-4 my-4">
        {packageStatus.map((data)=>(
          <div className={data.style} key={data.id}>
            <span className="text-xl font-semibold ">{data.type}</span>
            <p className="mt-5 text-7xl">
              {data.status}
            </p>
          </div>
        ))}
        </div>  
      </div>
  );
};

export default PackageStatus;
