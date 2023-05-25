import React, { useCallback } from 'react'
import { Avatar, Card, Button } from 'antd';
import {useDispatch} from 'react-redux'
import { logoutAction } from '../reducers/user';

const dummy = {
    nickname: '제로초',
    Posts: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
  };

const userProfile = ({setIsLoggedIn}) => {

    const dispatch=useDispatch()


    const onClick=useCallback(()=>{
        dispatch(logoutAction())
        // setIsLoggedIn(false)
    },[])
  return (
    <div>
         <Card
      actions={[
        <div key="twit">짹짹<br />{dummy.Posts.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      </Card>
        <Button onClick={onClick} >로그아웃</Button>
    </div>
  )
}

export default userProfile




