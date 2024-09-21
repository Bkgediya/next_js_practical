import React from 'react'
import getUser from '../../lib/getUser'
import getAllUser from '../../lib/getAllUser'

const UserByID = async ({params}) => {
  const data = await getUser(params.userId)
  return (
    <div>{data.name}</div>
  )
}

export default UserByID

export async function generateStaticParams(){
  const userData = await getAllUser()
  return userData.map((user) => ({userId:user.id.toString()}))

}