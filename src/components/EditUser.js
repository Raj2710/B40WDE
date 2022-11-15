import React from 'react'
import {useParams} from 'react-router-dom'

function EditUser() {
  let params = useParams()
  console.log(params)
  return (
    <h1>Selected User is {params.id}</h1>
  )
}

export default EditUser