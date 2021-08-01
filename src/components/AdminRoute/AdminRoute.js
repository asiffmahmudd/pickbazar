import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

const AdminRoute = ({ children, ...rest }) => {
    const {loggedInUser} = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.email === "asifmahmud3472@gmail.com" ? (
                children
                ) : (
                <>
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                </>
                )
            }
        />
    );
};

export default AdminRoute;