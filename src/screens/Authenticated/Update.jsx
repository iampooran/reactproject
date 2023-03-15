import React from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()

    // axios.put("url/${id}")

  return (
    <div>
        {id}
    </div>
  )
}

export default Update