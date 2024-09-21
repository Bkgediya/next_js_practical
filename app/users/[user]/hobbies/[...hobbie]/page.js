import React from 'react'

const page = ({params}) => {
  console.log("dynamic routing hobbies",params)
  return (
    <div>
      <h1>
        User id : {params.user}
        <br/>
        Hobbie is : {params.hobbie[0]}
      </h1>
    </div>
  )
}

export default page