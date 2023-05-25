import React,{useCallback} from 'react'
import {Input,Button,Form} from 'antd'
import useinput from '../hooks/useinput'
import { useSelector } from 'react-redux'

const CommentForm = ({post}) => {

    const id =useSelector((state)=>state.user.me?.id)

    const [text,onChangeText]=useinput('')

    const onSubmit=useCallback(()=>{
        console.log(post.id,text)
    },[text])

  return (
    <Form onFinish={onSubmit} style={{position:'relative'}}>
        <Input.TextArea  value={text} onChange={onChangeText} rows={3} 
        style={{marginTop:5}}
        ></Input.TextArea>
        <Button type='primary' htmlType='submit'
        style={{position:'absolute' ,right:'0px', bottom:'-40px'}}
        >쓰기</Button>
    </Form>
  )
}

export default CommentForm