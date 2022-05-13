import React from 'react';
import PropTypes from 'prop-types';

Breadcrumb.propTypes = {
    
};

function Breadcrumb(props) {
    return (
        <div className="topbar-left">
            <a href="/">Google Smart Shopping</a> / <a href="/">Quản Lý Quảng Cáo</a>
        </div>
    );
}

export default Breadcrumb;