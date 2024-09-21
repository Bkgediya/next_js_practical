import Link from 'next/link';
import React from 'react'

const page = ({params}) => {
  console.log("params from hobbie",params);
  
  return (
    <>
      <h1>Your hobbies</h1>
      <ul>
        <Link href={`../${params.user}/hobbies/wrestling`}>
          Wrestling
        </Link>
        <br/>
        {/* // you can do like this as well */}
        <Link href={"hobbies/boxing"}>
          Boxing
        </Link>
        <br/>
        <Link href={"hobbies/cricket"}>
          Cricket
        </Link>
        <br/>
        <Link href={"hobbies/football"}>
          Football
        </Link>
        <br/>
        <Link href={"hobbies/kabbadi"}>
          Kabbadi
        </Link>
        <br/>
      </ul>
    </>
  )
}

export default page