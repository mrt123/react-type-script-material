import React, {ReactElement} from 'react'
// @ts-ignore
import styled from 'styled-components'
// @ts-ignore  // ignore types for react-router-dom
import {withRouter} from 'react-router-dom'
import Breadcrumbs, {BreadcrumbData} from "./Breadcrumbs";
import MainMenu from "./MainMenu";
import PageContent from "./PageContent";

const Header = styled.div`
	background: black;
	color: grey;
`;

const StandardPage = styled.div`
    display: flex;
    height: ${window.innerHeight}px;  // device height - address bar
    flex-direction: column;
    justify-content: center;
`;

interface Props {
    children: ReactElement | string
    history: string
    overflow: string
    contentPadding: string
    breadcrumbs: BreadcrumbData[]
}

export default withRouter(({
                               children, history, breadcrumbs, contentPadding = '20px 25px 20px 25px'
                           }: Props) => {

    return (
        <StandardPage>
            <Header>
                <MainMenu/>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
            </Header>
            <PageContent contentPadding={contentPadding}>
                {children}
            </PageContent>
        </StandardPage>
    );
})