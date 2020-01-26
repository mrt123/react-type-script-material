import React from 'react'

interface Props {
    location: {
        pathname: string
    }
}

export default ({location}: Props) => (
    <div>
        <p>Page: {location.pathname} was not found</p>
    </div>
);