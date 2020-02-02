// @ts-ignore
import styled from 'styled-components'
// @ts-ignore  // ignore types for react-router-dom

interface PageContentProps {
    overflow: string
    contentPadding: string
}

const PageContent = styled.div`
	overflow: ${(p: PageContentProps) => p.overflow};
	background: #f3f3f4;
	padding: ${(p: PageContentProps) => p.contentPadding};
`;

export default PageContent