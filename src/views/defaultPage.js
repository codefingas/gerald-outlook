import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    && {
        width: 1250px;
    }
`

function defaultPage({icon, text} ) {
    return (
        <div>
            <Wrapper>
                <h1 className="center-align">
                    <i className={icon}></i>
                    {" "}
                    {text}
                </h1>
            </Wrapper>
        </div>
    )
}

export default defaultPage;