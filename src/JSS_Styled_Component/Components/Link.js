import styled from "styled-components";
import React from "react";
// export const Link = ({className, children, ...restProps}) => {
//     return (
//         <a className={className}>{children}</a>
//     )
// }


export const Link = ({className, children, ...restProps}) => (
    <a className={className}>{children}</a>
)

export const StyleLink = styled(Link)`
    color:pink !important;
    font-weight:bold; 
    font-size:35px

`