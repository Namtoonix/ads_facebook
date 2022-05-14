import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ChienDichQuangCao.propTypes = {
    
};

function ChienDichQuangCao(props) {
    const account = useSelector((state) => state.account);
    console.log(account)
    return (
        <div>
            
        </div>
    );
}

export default ChienDichQuangCao;