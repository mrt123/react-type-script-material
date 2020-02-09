import React from 'react'
// @ts-ignore
import styled from 'styled-components'
import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = styled.div`
	display: flex;
	padding: 3px 25px 5px 25px;
	font-size: 13px;
	font-weight: 700;
`

interface BreadcrumbData {
    location: string
    title: string
    navigable: boolean
}

interface BreadcrumbsProps {
    breadcrumbs?: BreadcrumbData[]
}

export default ({breadcrumbs}: BreadcrumbsProps) => {
    if(breadcrumbs === undefined || !breadcrumbs.length) return null

    const breadcrumbComponents = breadcrumbs.map((b, i)=> <Breadcrumb key={i} breadcrumbData={b}/>)

    return (
        <Breadcrumbs>
            {breadcrumbComponents}
        </Breadcrumbs>
    )
}