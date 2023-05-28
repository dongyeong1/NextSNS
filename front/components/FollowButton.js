import React,{useCallback} from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user'

const FollowButton = ({post}) => {

    const dispatch=useDispatch()

    const {me,followLoading,unfollowLoading} =useSelector((state)=>state.user)
    const isFollowing = me.Followings.find((v)=>v.id===post.User.id)

    const follow=useCallback(()=>{
        if(isFollowing){
            dispatch({
                type:UNFOLLOW_REQUEST,
                data:post.User.id
            })
        }else{
            dispatch({
                type:FOLLOW_REQUEST,
                data:post.User.id
            })
        }
    },[isFollowing])
  return (
      <div>  {isFollowing?  <Button loading={unfollowLoading}
        onClick={follow}
    >언팔로우</Button>:<Button
    loading={followLoading}
    onClick={follow}
>팔로우</Button>}
    </div>
  
  
  )
}

export default FollowButton