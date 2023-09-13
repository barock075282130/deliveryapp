import Link from "next/link"

const Sidebar = ({ wide, userData }) => {
    const userSide = [{
        links: '/addstock',
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
        name: 'เพิ่มพัสดุ'
    },{
        links: '/stocklist',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>,
        name: 'ข้อมูลพัสดุ'
    },{
        links: '/profile',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>,
        name: 'ข้อมูลส่วนตัว'
    }]
    const riderSide = [{
        links: '/stocklist',
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>,
        name: 'พัสดุที่รับ'
    },{
        links: '/profile',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>,
        name: 'ข้อมูลส่วนตัว'
    }]
    return (
        <aside className={wide}>
            <ul className="mt-3 flex flex-col ml-5 gap-3">
                {userData?.role !== 'rider'&&(
                    <>
                        {userSide.map((sidebar)=>(
                            <li key={sidebar.name}>
                                <Link href={sidebar.links}>
                                    <span className="flex gap-2">
                                        {sidebar.icons}
                                        <p className="hidden md:block">{sidebar.name}</p>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </>
                )}
                {userData?.role === 'rider'&&(
                    <>
                        {riderSide.map((sidebar)=>(
                            <li key={sidebar.name}>
                                <Link href={sidebar.links}>
                                    <span className="flex gap-2">
                                        {sidebar.icons}
                                        <p className="hidden md:block">{sidebar.name}</p>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar