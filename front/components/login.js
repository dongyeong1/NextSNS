import React, { useCallback, useState } from 'react'
import { Button,Form,Input } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import useinput from '../hooks/useinput'
import {useDispatch} from 'react-redux'
import { loginAction } from '../reducers/user'

const ButtonWrapper=styled.div`
margin-top:10px;
`;


const Login = ({setIsLoggedIn}) => {

    const dispatch = useDispatch();
    // const [id,setId]=useState('')
    const [password,setPassword]=useState('')
    const [passPassword,setPassPassword]=useState(false)

    const [id,onChangeId]=useinput('')

    // const onChangeId=useCallback((e)=>{
    //     setId(e.target.value)
    // },[])
    
    const checkPassword=useCallback((e)=>{
        if('123'===e){
            setPassPassword(true)
        }
    },[])


    const onChangePassword=useCallback((e)=>{
        setPassword(e.target.value)
        checkPassword(e.target.value)
    },[])

    const onSubmit=useCallback(()=>{
        if(passPassword){
            // setIsLoggedIn(true)
            dispatch(loginAction({id,password}))

        }
        
    },[id,password,passPassword])
    

  return (
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor='user-id' >아이디</label>
                <br/>
                <Input type="email" name='user-id' value={id} onChange={onChangeId} ></Input>
            </div>
            <ButtonWrapper >
                <label htmlFor='user-password' >비밀번호</label>
                <br/>
                <Input type="password" name='user-password' value={password} onChange={onChangePassword} ></Input>
            </ButtonWrapper>
            <Button type='primary' htmlType='submit'>로그인</Button>
            <Button type='primary'>
                <Link href='/signup'>
                <a>회원가입</a>
                </Link>
            </Button>
            
        </Form>
    )
}

export default Login