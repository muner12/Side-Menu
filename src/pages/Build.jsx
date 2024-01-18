import React from 'react'
import { useParams } from 'react-router-dom'

function Build() {
  const {bID}=useParams();
  return (
    <div>Build/{bID}</div>
  )
}

export default Build