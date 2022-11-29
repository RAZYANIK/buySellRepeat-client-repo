import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-green-800 to-green-400 text-black">{children}</button>
        </div>
    );
};

export default PrimaryButton;