import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const SimpleHeader = () => {
    return (
        <>
            <header className="bg-white">
                <div className ="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                        <div className="d-flex">
                            <Link className="navbar-brand d-flex align-items-center" to="/"><img src={logo} alt="" /></Link>
                        </div>
                    </nav>
                </div>
                
            </header>
        </>
    );
};

export default SimpleHeader;