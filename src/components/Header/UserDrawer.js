import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const UserDrawer = ({isUserDrawerOpen, handleUserDrawerClose, handleLoginOpen}) => {

    const handleJoinBtn = () => {
        handleUserDrawerClose()
        handleLoginOpen()
    }

    const {logout, loggedInUser} = useAuth()
    
    return (
        <Drawer 
            className="user-drawer" 
            anchor={"left"} 
            open={isUserDrawerOpen} 
            onClose={() => handleUserDrawerClose()}
        >
            <div className="user-drawer-close-btn" onClick={handleUserDrawerClose}>
                <AiOutlineClose color="black" size={20}></AiOutlineClose>
            </div>
            
            <div className="user-drawer-join text-center">
                {
                    loggedInUser &&
                    <div className="user-info d-flex align-items-center">
                        <div className="user-info-img mr-2">
                            <img src={loggedInUser.photo} alt="" />
                        </div>
                        <div className="user-details ml-2 text-left align-items-center">
                            <p className="user-info-name m-0 ">{loggedInUser.name}</p>
                            <p className="user-info-number m-0 mt-2">{loggedInUser.email ? loggedInUser.email: ""}</p>
                        </div>
                    </div>
                }
                {
                    !loggedInUser &&
                    <button className="btn btn primary btn-theme pr-3 pl-3" onClick={handleJoinBtn}>Join In</button>
                }
            </div>

            <div className="user-drawer-item-container pt-5">
                <div className="user-drawer-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="user-drawer-item">
                    <NavLink to="/user/profile">Profile</NavLink>
                </div>
                <div className="user-drawer-item">
                    <NavLink to="/user/orders">Your Order</NavLink>
                </div>
                <div className="user-drawer-item">
                    <div className="user-logout" onClick={logout}>Logout</div>
                </div>
                
            </div>
        </Drawer>
    );
};

export default UserDrawer;