import React from 'react'
// @ts-ignore
import styled from 'styled-components'
import {BreadcrumbData} from "./Breadcrumbs"

const Breadcrumb = styled.div`
    margin: 0 5px 0 0;
    font-size: 15px;
`

const Chevron = styled.span`
    display: inline-block;
    font-weight: bold;
    padding: 0 4px;
    transform: scale(2, 1.5);
    &:after {
        position: relative;
        top: -1px;
        content: '›';
    }
`

interface BreadcrumbProps {
    breadcrumbData: BreadcrumbData
}

export default ({breadcrumbData} :BreadcrumbProps) => {

    return (
        <Breadcrumb>
            <span>{breadcrumbData.title}</span> <Chevron/>
        </Breadcrumb>
    )
}