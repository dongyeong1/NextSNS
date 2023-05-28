import React, { useEffect } from 'react'
import AppLayouts from '../components/AppLayouts'
import {useDispatch, useSelector} from 'react-redux'
import PostForm from '../components/postForm'
import PostCard from '../components/PostCard'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
function index() {
    const dispatch=useDispatch();
    const {mainPosts,hasMorePosts,loadPostsLoading}=useSelector((state)=>state.post)

    useEffect(()=>{
        
            dispatch({
                type:LOAD_POSTS_REQUEST
            })
        
       
    },[])

    useEffect(()=>{
        function onScroll(){
            if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300){
                if(hasMorePosts&& !loadPostsLoading){
                    dispatch({
                        type:LOAD_POSTS_REQUEST
                    })
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return()=>{
            window.removeEventListener('scroll',onScroll)
        }
    },[mainPosts,loadPostsLoading,hasMorePosts])
    const me=useSelector((state)=>state.user.me)

  return (
      <AppLayouts>
          {me?<PostForm></PostForm>:null}
          {mainPosts.map((p)=>(
            <PostCard key={p.id} post={p}></PostCard>
          )) }
      </AppLayouts>
    
  )
}

export default index