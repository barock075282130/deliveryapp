import React from "react";

const PackageStatus = () => {
  return (
    <div className="grid grid-cols-4 gap-6 bg-red-500">
      <div className="grid place-items-center p-4 bg-red-100">
        <span>พัสดุ</span>
        <p>1</p>
      </div>
      <div className="grid place-items-center p-4 bg-red-100">
        <span>รอรับของ</span>
        <p>1</p>
      </div>
      <div className="grid place-items-center p-4 bg-red-100">
        <span>กำลังจัดส่ง</span>
        <p>1</p>
      </div>
      <div className="grid place-items-center p-4 bg-red-100">
        <span>ส่งแล้ว</span>
        <p>1</p>
      </div>
    </div>
  );
};

export default PackageStatus;
