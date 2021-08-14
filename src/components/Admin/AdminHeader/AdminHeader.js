import React from 'react';
import adminLogo from '../../../img/adminLogo.png';
import { Link } from 'react-router-dom';
import './AdminHeader.css';
import { IoNotificationsOutline } from "react-icons/io5";
import user from '../../../img/user.png';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useProductDrawer } from '../../../contexts/ProductDrawerContext';
import AdminProductDrawer from '../Pages/AdminProducts/AdminProductDrawer';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminHeader = ({setSidebarOpen}) => {
    const {isProductDrawerOpen, handleProductDrawerOpen, handleProductDrawerClose} = useProductDrawer()
    const {loggedInUser, logout} = useAuth()

    const [notifications, setNotifications] = useState([])
    const [unreadNotifications, setUnreadNotifications] = useState(0)
    useEffect(() => {
        fetch('https://pickbazar-clone.herokuapp.com/notifications')
        .then(res => res.json())
        .then(result =>{
            calculateUnread(result)
            setNotifications(result)
        })
    }, [])

    const calculateUnread = (result) =>{
        let unread = 0
        result.map(item => {
            if(item.unread)
                unread++
            return 0
        })
        setUnreadNotifications(unread)
    }

    const handleNotificationRead = (e, index) => {
        if(notifications[index].unread === true){
            fetch('https://pickbazar-clone.herokuapp.com/updateNotification/'+notifications[index]._id,{
                method: 'PUT'
            })
            .then(res=>res.json())
            .then(result=> result)
            .catch(e => alert(e.message))

            const newList = [...notifications]
            newList[index].unread = false
            setNotifications(newList)
            calculateUnread(newList)
            e.target.style.background = "white"
        }
    }

    const clearNotifications = () =>{
        fetch('https://pickbazar-clone.herokuapp.com/deleteNotifications',{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=> (result))
        .catch(e => alert(e.message))

        setNotifications([])
        setUnreadNotifications(0)
    }

    const markAllRead = () =>{
        fetch('https://pickbazar-clone.herokuapp.com/updateNotifications',{
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(result=> (result))
        .catch(e => alert(e.message))

        const newList = [...notifications]
        newList.map(item => item.unread = false)
        setNotifications(newList)
        setUnreadNotifications(0)
    }



    return (
        <>
        <header className="admin-header bg-white shadow-sm">
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand" to="/">
                        <img src={adminLogo} alt="" />
                    </Link>

                    <div className="admin-sidebar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
                        <AiOutlineAlignLeft size={30} color="rgb(22, 31, 106)"></AiOutlineAlignLeft>
                    </div>

                    <div className="navbar ml-auto" id="navbarSupportedContent">
                        <button className="ml-auto btn add-pd-btn pr-4 pl-4" onClick={()=>handleProductDrawerOpen(null)}>Add Product</button>
                        <div className="admin-notification">
                            {
                                unreadNotifications > 0 &&
                                <span className="new-notification"></span>
                            }
                            <IoNotificationsOutline className="dropdown-toggle hover-pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" size={20} color="rgb(22, 31, 106)"></IoNotificationsOutline>
                            <div className="notification-dropdown dropdown-menu pt-0" aria-labelledby="dropdownMenuButton" id="test">
                                <div className="notifications-container">
                                {
                                    notifications.length === 0 &&
                                    <p className="text-center mt-3">No New Notification</p>
                                }
                                {
                                    notifications.length > 0 &&
                                    notifications.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} onMouseEnter={(e)=>handleNotificationRead(e,index)} className={"notification-item "+item.unread}>
                                                    <p className="text-left">{item.desc}</p>
                                                    <p className="text-left notification-time">{item.date}</p>
                                                </div>
                                                <hr style={{margin:0}}/>
                                            </>
                                        )
                                    })
                                }
                                </div>

                                <div className="clear-notification">
                                    <div className="d-flex justify-content-around">
                                        <p onClick={clearNotifications} className="hover-pointer d-flex m-0 pt-2 pb-2 justify-content-center align-items-center border-top border-right w-50" >Clear All Notifications</p>
                                        <p onClick={markAllRead} className="hover-pointer d-flex m-0 pt-2 pb-2 justify-content-center align-items-center border-top w-50">Mark all as read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown user-icon hover-pointer">
                            <img className="dropdown-toggle" src={loggedInUser.photo? loggedInUser.photo : user} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/admin/settings">Settings</Link>
                                <div className="dropdown-item" href="/admin/dashboard" onClick={logout}>Logout</div>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
            
        </header>
        <AdminProductDrawer product={null} isProductDrawerOpen={isProductDrawerOpen} handleProductDrawerClose={handleProductDrawerClose}></AdminProductDrawer>
        </>
    );
};

export default AdminHeader;