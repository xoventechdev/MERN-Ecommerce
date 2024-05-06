import React from 'react';
import SideBar from './SideBar';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const MasterComponent = (pops) => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
  <div className="layout-container">
    <SideBar />
    <div className="layout-page">
        <HeaderComponent />
        <div className="content-wrapper">
        {pops.children}
        <FooterComponent />
        <div className="content-backdrop fade"></div>
        </div>

    </div>
    </div>
    </div>
    );
};

export default MasterComponent;