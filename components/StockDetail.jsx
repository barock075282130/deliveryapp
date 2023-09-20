"use client";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StockDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get("id");
  const { data: session } = useSession();
  const permission = session?.user?.id;
  const [packageDetail, setPackageDetail] = useState(
    permission?.role === "rider"
      ? {
          username: "",
          receiveFrom: "",
          sendTo: "",
          userPhone: "",
          receiverName: "",
          receiverPhone: "",
        }
      : {
          username: "",
          title: "",
          receiveFrom: "",
          sendTo: "",
          packageInfo: "",
          userPhone: "",
          receiverName: "",
          receiverPhone: "",
        }
  );
  const apiGetData = async () => {
    try {
      const res = await fetch(
        `/api/customer/packagedata/${packageId.toString()}`,
        {
          method: "GET",
        }
      );
      const dataJSON = await res.json();
      setPackageDetail(dataJSON);
    } catch (error) {
      console.log(error);
    }
  };
  const apiRiderGetData = async () => {
    try {
      const res = await fetch(
        `/api/rider/packagedata/detail/${packageId.toString()}`,
        {
          method: "GET",
        }
      );
      const dataJSON = await res.json();
      setPackageDetail(dataJSON);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(!permission?._id) router.push('/')
    if (permission?.role === "rider") {
      apiRiderGetData();
    } else {
      apiGetData();
    }
  }, [permission]);
  const loadingText = 'text-black/30'
  return (
    <div className="ml-16 md:ml-40">
      <div className="mx-72 p-6 shadow-lg">
        <p className="text-2xl text-center font-semibold mt-6 mb-2">
          รายละเอียดพัสดุ
        </p>
        {packageDetail ? (
          permission?.role === "rider" ? (
            <>
              <div className="flex justify-normal gap-x-6">
                <div className="grid grid-cols-2 gap-x-3">
                  <label className="ml-2 block mb-1 font-semibold">
                    ชื่อ-นามสกุลผู้ส่ง
                  </label>
                  <p>{packageDetail.username || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    เบอร์โทรศัพท์ผู้ส่ง
                  </label>
                  <p>{packageDetail.userPhone || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    ที่อยู่ผู้ส่งพัสดุ
                  </label>
                  <p>{packageDetail.receiveFrom || "กำลังโหลดข้อมูล..."}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-3">
                  <label className="ml-2 block mb-1 font-semibold">
                    ชื่อผู้รับ
                  </label>
                  <p>{packageDetail.receiverName || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    เบอร์โทรศัพท์ผู้รับ
                  </label>
                  <p>{packageDetail.receiverPhone || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    ที่อยู่ผู้รับพัสดุ
                  </label>
                  <p>{packageDetail.sendTo || "กำลังโหลดข้อมูล..."}</p>
                </div>
              </div>
              <button className="gray_button">
                <Link href="/stocklist">ย้อนกลับ</Link>
              </button>
            </>
          ) : (
            <>
              <div className="grid gap-x-6">
                <div className="grid grid-cols-2 gap-x-3 mt-5">
                  <label className="ml-2 block mb-1 font-semibold">
                    ชื่อ-นามสกุล
                  </label>
                  <p>{packageDetail.username || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    เบอร์โทรศัพท์
                  </label>
                  <p>{packageDetail.userPhone || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    ที่อยู่ผู้ส่งพัสดุ
                  </label>
                  <p>{packageDetail.receiveFrom || "กำลังโหลดข้อมูล..."}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-3">
                  <label className="ml-2 block mb-1 font-semibold">
                    ชื่อผู้รับ
                  </label>
                  <p>{packageDetail.receiverName || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    เบอร์โทรศัพท์ผู้รับ
                  </label>
                  <p>{packageDetail.receiverPhone || "กำลังโหลดข้อมูล..."}</p>
                  <label className="ml-2 block mb-1 font-semibold">
                    ที่อยู่ผู้รับพัสดุ
                  </label>
                  <p>{packageDetail.sendTo || "กำลังโหลดข้อมูล..."}</p>
                </div>
                <label className="ml-2 block mb-1 font-semibold">
                  ประเภทของพัสดุ
                </label>
                <p className="text-center">
                  {packageDetail.title || "กำลังโหลดข้อมูล..."}
                </p>
                <label className="ml-2 block mb-1 font-semibold">
                  ข้อมูลพัสดุ
                </label>
                <p className="text-center mb-5">
                  {packageDetail.packageInfo || "กำลังโหลดข้อมูล..."}
                </p>
                <button className="gray_button">
                  <Link href="/stocklist">ย้อนกลับ</Link>
                </button>
              </div>
            </>
          )
        ) : (
          <p>ไม่มีข้อมูล</p>
        )}
      </div>
    </div>
  );
};

export default StockDetail;
