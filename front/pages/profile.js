import React from 'react'
import AppLayouts from '../components/AppLayouts'
import FollowList from '../components/FollowList'
import NicknameEditForm from '../components/NicknameEditForm'


const profile = () => {
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