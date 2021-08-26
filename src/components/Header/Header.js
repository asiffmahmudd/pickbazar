import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import logo from '../../img/logo.svg';
import {AiOutlineSearch} from 'react-icons/ai';
import './Header.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';
import ResetModal from '../ResetModal/ResetModal';
import FilterDrawer from './FilterDrawer';
import { useAuth } from '../../contexts/AuthContext';
import { AiOutlineAlignLeft } from "react-icons/ai";
import UserDrawer from './UserDrawer';
import userIcon from '../../img/user.png';
import { useEffect } from 'react';
import { useItem } from '../../contexts/ItemContext';

const Header = ({changeCategory}) => {

    const [loginIsOpen,setLoginIsOpen] = useState(false);
    const [signupIsOpen, setSignupIsOpen] = useState(false);
    const [resetIsOpen, setResetIsOpen] = useState(false);

    const handleLoginOpen = () => {
        setLoginIsOpen(true);
        setSignupIsOpen(false);
        setResetIsOpen(false);
        document.body.style.overflow = 'hidden';
    }

    const handleSignupOpen = () => {
        setLoginIsOpen(false);
        setSignupIsOpen(true);
        setResetIsOpen(false);
        document.body.style.overflow = 'hidden';
    }

    const handleResetOpen = () => {
        setLoginIsOpen(false);
        setSignupIsOpen(false);
        setResetIsOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setLoginIsOpen(false)
        setSignupIsOpen(false);
        setResetIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    const [isFilterDrawerOpen, setFilterDrawerOpen] = useState(false);

    const handleFilterDrawerClose = () => {
        setFilterDrawerOpen(false);
    }

    const {loggedInUser, logout} = useAuth()
    
    const [isUserDrawerOpen, setUserDrawerOpen] = useState(false)

    const handleUserDrawerClose = () => {
        setUserDrawerOpen(false)
    }

    const history = useHistory()

    const handleSearchClick = () => {
        const searchQuery = document.getElementById('search-bar').value
        history.push('/products/'+searchQuery)
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const searchQuery = document.getElementById('search-bar').value
        history.push('/products/'+searchQuery)
    }

    const [isHome, setIsHome] = useState(false)

    useEffect(() => {
        if(document.location.pathname === "/"){
            setIsHome(true)
        }
    }, [window.location])
    
    const {logo} = useItem()

    return (
        <>
        <header className="bg-white">
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <div className="d-flex">
                        <div className="user-drawer-toggle">
                            <AiOutlineAlignLeft size={30} 
                                color="rgb(22, 31, 106)" 
                                className="mr-3"
                                onClick={()=>setUserDrawerOpen(true)}
                            />
                        </div>
                        <Link className="navbar-brand d-flex align-items-center" to="/"><img className="site-logo" src={logo} alt="" /></Link>
                    </div>

                    {
                        isHome &&
                        <AiOutlineSearch 
                            size={25} 
                            className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        </AiOutlineSearch>
                    }

                    <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                        {
                            isHome &&
                            <ul className={"navbar-nav col-lg-8 ml-auto"}>
                                <form onSubmit={handleSearchSubmit} className="form-inline rounded p-2 w-100">
                                    <AiOutlineSearch size={25} onClick={handleSearchClick} className="hover-pointer"></AiOutlineSearch>
                                    <input className="border-0 ml-1" id="search-bar" type="search" placeholder="Search your products from here" aria-label="Search" />
                                </form>
                            </ul>
                        }
                        {
                            !loggedInUser &&
                            <ul className="navbar-nav ml-auto">
                                <button className="btn btn primary btn-theme pr-5 pl-5" onClick={handleLoginOpen}>Join</button>
                            </ul>
                        }
                        {
                            loggedInUser &&
                            <ul className="navbar-nav ml-auto user-menu">
                                <div className="dropdown user-icon hover-pointer">
                                    <img className="dropdown-toggle" src={loggedInUser.photo?loggedInUser.photo:userIcon} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/user/profile">Profile</Link>
                                        <Link className="dropdown-item" to="/user/orders">Your Orders</Link>
                                        <div className="dropdown-item" href="/admin/dashboard" onClick={logout}>Logout</div>
                                    </div>
                                </div>
                            </ul>
                        }
                    </div>

                    

                    <LoginModal handleSignupOpen={handleSignupOpen} handleResetOpen={handleResetOpen} loginIsOpen={loginIsOpen} handleClose={handleClose}></LoginModal>
                    <SignupModal handleLoginOpen={handleLoginOpen} signupIsOpen={signupIsOpen} handleClose={handleClose}></SignupModal>
                    <ResetModal handleClose={handleClose} resetIsOpen={resetIsOpen} handleResetOpen={handleResetOpen} handleLoginOpen={handleLoginOpen}></ResetModal>
                </nav>
            </div>
            
            {/* <hr style={{margin:0}}/>
            <div className="filter-mobile-view bg-white shadow-sm">
                <div className="p-3 d-flex justify-content-between">
                    {
                        selectedCategory? 
                        <div className="mobile-view-selected-category">{selectedCategory}</div> 
                        :<div style={{fontWeight:700}}>No Category Selected</div>
                    }
                    
                    <div className="mobile-view-filter-text" onClick={handleFilterDrawerOpen}>
                        Filter
                    </div>
                </div>
            </div> */}
            <FilterDrawer 
                changeCategory={changeCategory} 
                isFilterDrawerOpen={isFilterDrawerOpen} 
                handleFilterDrawerClose={handleFilterDrawerClose}
            />
            <UserDrawer
                isUserDrawerOpen={isUserDrawerOpen}
                handleUserDrawerClose={handleUserDrawerClose}
                handleLoginOpen={handleLoginOpen}
            />
        </header>
        
        </>
    );
};

export default Header;