import React from 'react'

interface HtmlProps {
    html: string
}

export const Html: React.FC<HtmlProps> = ({ html }) => {
  return (
    <div className={'ck-content'}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
