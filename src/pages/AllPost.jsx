import React,{useEffect,useState} from 'react'
import Service, { service } from '../AppWrite/config'
import { PostCard,Container } from '../components'

function AllPost() {
    const [posts ,setPosts]=useState([])
    useEffect(()=>{
         service.getAllPost([]).then((posts)=>{
            if(posts) setPosts(posts.documents)
         })
    },[])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                  { posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/2'>
                        <PostCard post={post}/>
                    </div>
                  ))}
                </div>
            </Container> 
        </div>
    )
}

export default AllPost
