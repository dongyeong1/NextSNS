import Router from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppLayouts from '../components/AppLayouts'
import FollowList from '../components/FollowList'
import NicknameEditForm from '../components/NicknameEditForm'


const profile = () => {

    const {me}=useSelector((state)=>state.user)

    useEffect(()=>{
        if(!(me&&me.id)){
            Router.push('/')
        }
    },[me&&me.id])

    if(!me){
        return null
    }

    const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];

  return (
      <AppLayouts>
          <NicknameEditForm/>
          <FollowList header='팔로잉' data={followingList}/>
          <FollowList header='팔로워' data={followerList}/>
      </AppLayouts>
    
  )
}

export default profile 