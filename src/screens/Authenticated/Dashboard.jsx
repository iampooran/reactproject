import React, { useCallback, useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import Delete from './Delete'
import { Link } from 'react-router-dom'
import Update from './Update'

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
                <Link to={`/updateuser/${posts.id}`}><button>Update</button></Link>
                {/* <Link to={`updateuser/${post.id}`}>Update</Link> */}
            </div>
        })}
        
    </div>
  )
}

export default Dashboard