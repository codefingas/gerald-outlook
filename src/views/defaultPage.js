import React from 'react';

function defaultPage(props) {
    let {icon, text} = props;
    return (
        <div>
            <h1 className="center-align">
                <i className={icon}></i>
                {" "}
                {text}
            </h1>
        </div>
    )
}

export default defaultPage;