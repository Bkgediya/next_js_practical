import React from 'react'


const getUser = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{next: {revalidate: 60}} )
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
    return res.json()
}

export default getUser