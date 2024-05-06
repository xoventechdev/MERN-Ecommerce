import React from 'react';
import {Link} from 'react-router-dom'
import MasterComponent from '../Component/Shared/MasterComponent';

const HomePage = () => {
    return (
        <MasterComponent>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Home Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </MasterComponent>
    );
};

export default HomePage;