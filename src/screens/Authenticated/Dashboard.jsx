import React, { useCallback, useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import Delete from './Delete'

const Dashboard = () => {
    const [post,setPost] = useState([]) 
    
    const getPost = useCallback(async()=>{
        try{
            const { data } = await axiosInstance.get("/posts")
            setPost(data)
        }catch(error){
            console.log(error)
        }
    },[])

    useEffect(()=>{
        (async()=>{
            await getPost();
        })();
    },[])
  return (
    <div>
        
        {post.map((posts)=>{
            return <div>
                <hr />
                {posts.title}
                <Delete id={posts.id}/>   
            </div>
        })}
        
    </div>
  )
}

export default Dashboard