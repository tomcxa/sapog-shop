import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div className="switcher">
            <span onClick={onSwitch} className="material-icons">
                {icon}
            </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;
