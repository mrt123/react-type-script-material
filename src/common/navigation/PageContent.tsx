import styled from 'styled-components'

interface PageContentProps {
    overflow: string
    contentPadding: string
}

const PageContent = styled.div`
	background: #f3f3f4;
    padding: ${(p: PageContentProps) => p.contentPadding};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export default PageContent