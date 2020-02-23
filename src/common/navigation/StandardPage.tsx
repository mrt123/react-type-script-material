import React, {ReactElement} from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import Breadcrumbs, {Props as BreadCrumbsProps} from "./Breadcrumbs";
import MainMenu from "./MainMenu";
import PageContent from "./PageContent";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll({children}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
    );
}

const StandardPage = styled.div`
`;

interface Props {
    children: ReactElement | string
    history: string
    overflow: string
    contentPadding: string
    breadcrumbs: BreadCrumbsProps["breadcrumbs"]
}

export default withRouter(({
                               children, history, breadcrumbs, contentPadding = '20px 25px 20px 25px'
                           }: Props) => {
    return (
        <StandardPage>
            <HideOnScroll>
                <AppBar>
                    <MainMenu/>
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                </AppBar>
            </HideOnScroll>
            <Toolbar data-qa="Toolbar"/>
            <PageContent contentPadding={contentPadding}>
                {children}
            </PageContent>
        </StandardPage>
    );
})