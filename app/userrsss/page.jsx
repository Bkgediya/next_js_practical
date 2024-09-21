import React from 'react'
import getAllUser from '../lib/getAllUser'

const Userrsss = async () => {
  const userData = await getAllUser()
  // console.log("first",userData)
  return (
    <div>
      {
        userData?.map(user => {
          return  (
            <p key={user.id}>
              <a href={`userrsss/${user.id}`}> {user.name}
              </a>
            </p>
          )
        })
      }
    </div>
  )
}

export default Userrsss