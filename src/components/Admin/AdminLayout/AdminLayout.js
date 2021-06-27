import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ProductDrawer from '../Pages/AdminProducts/AdminProductDrawer';
import './AdminLayout.css'

const AdminLayout = ({children}) => {

    const resizeAction = () => {
        if(window.innerWidth <= 991){
            setSidebarOpen(false)
        }
        else{
            setSidebarOpen(true)
        };
    }

    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth <= 991 ? false: true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            resizeAction()    
        })
    }, [])

    return (
        <>
            <AdminHeader setSidebarOpen={setSidebarOpen}></AdminHeader>
            <div className="container-fluid" style={{marginTop: '136px'}}>
                <div className="row full-admin-container">
                    <div className="col-lg-2 admin-sidebar-container" style={!sidebarOpen?{visibility:"hidden", height:"0px", width:"0px"}:{visibility:"visible", height:"100%", width:"100%"}}>
                        <AdminSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}></AdminSidebar>
                    </div>
                    <div className="col-lg-10 admin-container justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
            <ProductDrawer></ProductDrawer>
        </>
    );
};

export default AdminLayout;