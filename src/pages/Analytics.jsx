import React from 'react'
import { useParams } from 'react-router-dom'

function Analytics() {
const {aID}=useParams();
  return (
    <div>Analytics/{aID}</div>
  )
}

export default Analytics