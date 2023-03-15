import React, { useCallback } from 'react'
import axiosInstance from '../../utils/axios'

const Delete = ({id}) => {

    const deletePost = useCallback(async()=>{
        try{
            await axiosInstance.delete(`/posts/${id}`)
        }catch(error){
            console.log(error)
        }
    },[])

  return (
    <div>
        <button onClick={deletePost}>Delete</button>
    </div>
  )
}

export default Delete