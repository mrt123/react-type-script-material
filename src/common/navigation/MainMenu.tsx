import React from 'react'
import {
    NavLink
    // @ts-ignore  // ignore types for react-router-dom
} from "react-router-dom";
// @ts-ignore
import styled from 'styled-components'

const MainMenu = styled.div`
    display: flex;
    justify-content: center;
`

const Link = styled(NavLink)`
    padding: 2px 10px;
    color: grey;
    text-decoration: none;
    font-weight: 800;
`

export default () => {

    const activeLinkStyle = {color: 'white'}

    return (
        <MainMenu>
            <Link to="/" exact activeStyle={activeLinkStyle}>
                Home
            </Link>
            <Link to="/page1" activeStyle={activeLinkStyle}>
                Page1
            </Link>
        </MainMenu>
    )
}