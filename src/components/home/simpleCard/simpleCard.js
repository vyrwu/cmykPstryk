import React from 'react'

const SimpleCard = ({
    header,
    paragraphs
}) => (
    <>
        <h1>{header}</h1>
        {paragraphs.map((paragraph) => (<p>{paragraph}</p>))}
    </>
)

export default SimpleCard
