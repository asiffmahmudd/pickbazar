import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedInUser} = useAuth();
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser ? 
                    loggedInUser.emailVerified ? 
                        (children) 
                    :
                    (
                        <Redirect
                            to={{
                            pathname: "/verifyEmail",
                            state: { from: location }
                            }}
                        />
                    )
                : 
                (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;