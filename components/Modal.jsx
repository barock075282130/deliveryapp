'use client';
import { useState } from "react";

const Modal = ({
        type,
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
        >
            {type}
        </button>
        {openModal ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative gap-3 flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between pt-5 px-5 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">{title}ข้อมูลใช่หรือไม่</h3>
                        </div>
                        <div className="flex items-center justify-between p-3 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold px-6 py-2 text-sm mr-1 mb-1"
                                type="button"
                                onClick={closeModal}
                            >
                                ยกเลิก
                            </button>
                            <button
                                type="button"
                                className="text-blue-500 background-transparent font-bold px-6 py-2 text-sm mr-1 mb-1"
                                onClick={handleFunction}
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