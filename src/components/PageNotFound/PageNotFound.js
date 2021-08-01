import React from 'react';
import SimpleHeader from '../SimpleHeader/SimpleHeader';
import notFound from '../../img/notFound.png'

const PageNotFound = () => {

    const customStyle = {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: '50px'
    }

    return (
        <>
            <SimpleHeader></SimpleHeader>
            <div className="" style={customStyle}>
                <img style={{maxWidth:'100%'}} src={notFound} alt="" />
                <h1 className="text-center mt-3">404 | Page Not Found</h1>
            </div>
        </>
    );
};

export default PageNotFound;