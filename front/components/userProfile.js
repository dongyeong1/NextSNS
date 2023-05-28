import React, { useCallback } from 'react'
import { Avatar, Card, Button } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { logoutRequestAction } from '../reducers/user';

const dummy = {
    nickname: '제로초',
    Posts: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
  };

const userProfile = ({setIsLoggedIn}) => {

    const{logOutLoading,me}=useSelector((state)=>state.user)

    const dispatch=useDispatch()


    const Click=useCallback(()=>{
        dispatch(logoutRequestAction())
        // setIsLoggedIn(false)
    },[])
  return (
    <div>
         <Card
      actions={[
        <div key="twit">짹짹<br />{me.Posts.length}</div>,
        <div key="following">팔로잉<br />{me.Followings.length}</div>,
        <div key="follower">팔로워<br />{me.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      </Card>
        <Button type='primary' onClick={Click} loading={logOutLoading}  >로그아웃</Button>
    </div>
  )
}

export default userProfile




