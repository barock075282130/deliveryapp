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
  },{
    id:'wait',
    type: 'รอรับของ',
    status: packageStat.wait,
  },{
    id:'going',
    type: 'กำลังส่งของ',
    status: packageStat.going,
  },{
    id:'done',
    type: 'ส่งของแล้ว',
    status: packageStat.done,
  }]
  return (
      <div className="grid grid-cols-4 gap-6 w-">
        {packageStatus.map((data)=>(
          <div className="grid place-items-center p-4" key={data.id}>
            <span>{data.type}</span>
            <p>{data.status}</p>
          </div>
        ))}
      </div>
  );
};

export default PackageStatus;
