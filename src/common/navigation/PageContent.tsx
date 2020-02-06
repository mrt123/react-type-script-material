// @ts-ignore
import styled from 'styled-components'
// @ts-ignore  // ignore types for react-router-dom

interface PageContentProps {
    overflow: string
    contentPadding: string
}

const PageContent = styled.div`
	background: #f3f3f4;
    padding: ${(p: PageContentProps) => p.contentPadding};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex-grow: 1;
`;

export default PageContent