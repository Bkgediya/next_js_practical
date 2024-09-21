import React from 'react'

const page = ({params}) => {
  // console.log("params",params.user)
  return (
    <div>
      {`hello from user ${params.user}`}
    </div>
  )
}

export default page