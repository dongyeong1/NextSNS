import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayouts';
import useInput from '../hooks/useinput';
import AppLayouts from '../components/AppLayouts';


const signup = () => {

    const [id,onChangeId]=useInput('')
    const [nickname,onChangeNickname]=useInput('')
    const [password,onChangePassword]=useInput('')

    const [passwordError,setPasswordError]=useState(false)
    const [passwordCheck,setPasswordCheck]=useState('')
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordError(e.target.value!==password)
        setPasswordCheck(e.target.value)
    },[password])

    const onSubmit=useCallback(()=>{
        if(password !==passwordCheck){
            return setPasswordError(true)
        }
        if (!term) {
            return setTermError(true);
          }
        console.log(id,password)
    },[password, passwordCheck, term])


    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
      }, []);
    

  return (
    <AppLayout>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br></br>
                <Input type="email"  name='user-id' value={id} onChange={onChangeId} required></Input>
            </div>
            <div>
                <label htmlFor='user-nickname'>닉네임</label>
                <br></br>
                <Input name='user-nickname' value={nickname} onChange={onChangeNickname} required></Input>
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br></br>
                <Input type="password" name='user-password' value={password} onChange={onChangePassword} required></Input>
            </div>
            <div>
                <label htmlFor='user-password-check'>비밀번호확인</label>
                <br></br>
                <Input type="password" value={passwordCheck} onChange={onChangePasswordCheck} name='user-password-check' required></Input>
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}           
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
                {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
    </AppLayout>
  )
}

export default signup