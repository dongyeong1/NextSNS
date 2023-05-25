import React from 'react'
import AppLayouts from '../components/AppLayouts'
import {useSelector} from 'react-redux'
import PostForm from '../components/postForm'
import PostCard from '../components/PostCard'
function index() {

    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)
    const mainPosts=useSelector((state)=>state.post.mainPosts)

  return (
      <AppLayouts>
          {isLoggedIn?<PostForm></PostForm>:null}
          {mainPosts.map((p)=>(
            <PostCard key={p.id} post={p}></PostCard>
          )) }
      </AppLayouts>
    
  )
}

export default index