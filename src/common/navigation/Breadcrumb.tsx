import React from 'react'
// @ts-ignore
import styled from 'styled-components'
import {BreadcrumbData} from "./Breadcrumbs";

const Breadcrumb = styled.div`
    margin: 0 5px 0 0;
`

interface BreadcrumbProps {
    breadcrumbData: BreadcrumbData
}

export default ({breadcrumbData} :BreadcrumbProps) => {

    return (
        <Breadcrumb>
            / {breadcrumbData.title}
        </Breadcrumb>
    )
}