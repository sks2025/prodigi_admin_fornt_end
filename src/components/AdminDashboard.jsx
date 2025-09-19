import React, { useEffect, useState } from 'react'
import { LuLayoutDashboard, LuDatabase, LuPen, LuArrowDownUp } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FiHeadphones } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import "./AdminDashboard.css"
import logo from "./logoprodigi.png"
import { Routes, Route, useLocation } from 'react-router-dom'
import DashboardPage from './DashboardPage';
import CustomerServicePage from './CustomerServicePage';
import OrganizerSupportPage from './OrganizerSupportPage';
import DataManagementPage from './DataManagementPage';
import UserManagementPage from './UserManagementPage';
import CreateUserPage from './CreateUserPage';
import Organiser from './Organiser';
import Compitions from './Compitions';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('Dashboard')
    const [getMsg, setGetmsg] = useState([])
    // const navigate = useNavigate()
    const location = useLocation()
    const isSubRoute = location.pathname.startsWith('/dashboard/')

    const sidebarLinks = [
        { icon: <LuLayoutDashboard className='icon' />, label: 'Dashboard' },
        { icon: <GoPerson className='icon' />, label: 'Customer Service' },
        { icon: <FiHeadphones className='icon' />, label: 'Organizer Support' },
        { icon: <LuPen className='icon' />, label: 'User Management' },
        { icon: <LuDatabase className='icon' />, label: 'Data Management' },
        { icon: <GoPerson className='icon' />, label: 'Organiser' },
        {icon : <GoPerson className='icon' /> , label:'Compitions'}

    ]

    const getmsg = () => {
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch("http://localhost:3001/api/contact-us/get", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setGetmsg(result.data);
                })
                .catch((error) => console.error(error));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getmsg()
    }, [])


    return (
        <section className="dashboard-section">
            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}

            <aside className={`sidebar${isSidebarOpen ? ' open' : ''}`}>
                <div className="sidebar-logo">
                    <img src={logo} alt="Prodigi" className="logo-img" />
                </div>
                <div className="sidebar-header">
                    <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg" alt="image" className="sidebar-avatar" />
                    <div className="sidebar-user">
                        <p className="name">Tushar</p>
                        <p className="role">Admin</p>
                    </div>
                    <button type="button" aria-label="Close sidebar" className="close-btn" onClick={() => setIsSidebarOpen(false)}>
                        <IoClose />
                    </button>
                </div>
                <nav className="sidebar-links">
                    {sidebarLinks.map((l) => (
                        <a key={l.label} className={`sidebar-link${activeTab === l.label ? ' active' : ''}`} onClick={() => { setActiveTab(l.label); setIsSidebarOpen(false); }}>{l.icon} {l.label}</a>
                    ))}
                </nav>
            </aside>

            <main className="main">
                <div className="main-heading-wrap">
                    <div className="heading-left">
                        <button type="button" aria-label="Open sidebar" className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
                            <IoMenu />
                        </button>
                        <h1 className="main-heading">{activeTab === 'Customer Service' ? 'Customer Service' : 'Your Actions'}</h1>
                    </div>
                </div>

                {!isSubRoute && (
                    activeTab === 'Customer Service' ? (
                        <CustomerServicePage />
                    ) : activeTab === 'Organizer Support' ? (
                        <OrganizerSupportPage />
                    ) : activeTab === 'User Management' ? (
                        <UserManagementPage />
                    ) : activeTab === 'Data Management' ? (
                        <DataManagementPage />
                    ) : activeTab === 'Organiser' ? (
                        <Organiser />
                    )
                        : activeTab === 'Compitions' ? (
                            <Compitions />

                        ) : (
                            <DashboardPage getMsg={getMsg} />
                        )
                )}

                <Routes>
                    <Route path="create-user" element={<CreateUserPage />} />
                </Routes>
            </main>
        </section>
    )
}

export default AdminDashboard;