import React, { ReactElement } from 'react';
// @ts-ignore  // ignore types for styled-components
import styled from 'styled-components';

const Route = styled.div` 
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

interface Props {
	children: ReactElement | string
}

const RoutePage = ({children}: Props) => {
	return (
		<Route>
			{children}
		</Route>
	)
}

export default RoutePage