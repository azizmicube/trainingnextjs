import React from 'react'

const DynamicSSR = ({ssrCondition}) => {
  return (
    <div>
        <div className="alert alert-info" role="alert">
            Load with dynamic Import <strong>SSR {ssrCondition}</strong>
        </div>
    </div>
  )
}

export default DynamicSSR