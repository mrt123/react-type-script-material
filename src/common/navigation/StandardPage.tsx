import React, {ReactElement} from 'react'
// @ts-ignore
import styled from 'styled-components'
// @ts-ignore  // ignore types for react-router-dom
import {withRouter} from 'react-router-dom'
import Breadcrumbs, {BreadcrumbData} from "./Breadcrumbs";
import PageContent from "./PageContent";

const Header = styled.div`
    position: sticky;
    top: 0;
    height: 55px;
	background: black;
	color: grey;
`;

const StandardPage = styled.div``;


interface Props {
    children: ReactElement | string
    history: string
    overflow: string
    contentPadding: string
    breadcrumbs?: BreadcrumbData[]
}

export default withRouter(({
                               children, history, breadcrumbs, overflow = 'hidden', contentPadding = '20px 25px 20px 25px'
                           }: Props) => {

    return (
        <StandardPage>
            <Header>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
            </Header>
            <PageContent overflow={overflow} contentPadding={contentPadding}>
                {children}
            </PageContent>
        </StandardPage>
    );
})