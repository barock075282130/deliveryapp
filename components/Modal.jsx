'use client';
import { useState } from "react";

const Modal = ({
        title,
        handleFunction,
        status,
    }) => {
    const [ openModal, setOpenModal ] = useState(false);
    const showModal = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <>
        <button
            type="button"
            onClick={showModal}
            className="bg-red-600 w-full h-full py-2 font-semibold text-red-100 hover:text-red-600 hover:bg-red-100 duration-300"
        >
            ลบข้อมูล
        </button>
        {openModal ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6">
                    <div className="border-0 rounded-lg shadow-lg relative gap-3 flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between pt-5 px-5 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">ต้องการ{title}ข้อมูลใช่หรือไม่</h3>
                        </div>
                        <div className="flex items-center justify-between p-2 border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent hover:bg-red-600 hover:text-red-100 duration-200 rounded-lg font-bold px-6 py-2 text-sm"
                                type="button"
                                onClick={closeModal}
                            >
                                ยกเลิก
                            </button>
                            <button
                                type="button"
                                className="text-blue-500 background-transparent hover:bg-blue-600 hover:text-blue-100 duration-200 rounded-lg font-bold px-6 py-2 text-sm mr-1"
                                onClick={handleFunction}
                                disabled={status}
                            >
                                { status ? `กำลัง${title}ข้อมูล...` : `ยืนยัน` }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
    )
}

export default Modal