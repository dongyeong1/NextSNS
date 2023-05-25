import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Menu,Input,Row,Col} from 'antd'
import UserProfile from './userProfile'
import Login from './Login'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

import { useSelector } from 'react-redux'

const InputSearch=styled(Input.Search)`
Vertical-align:middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayouts = ({children}) => {

    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)

    // const [isLoggedIn,setIsLoggedIn]=useState(false)
    // 

  return (
    <div>
        <Menu mode='horizontal'>
        <Global />

            <Menu.Item>
                <Link href='/profile'><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/'><a>홈</a></Link>
            </Menu.Item>
            <Menu.Item>
            <InputSearch enterButton  />
            </Menu.Item>
            <Menu.Item>
                <Link href='/signup'><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>

        <Row gutter={8}>
            <Col xs={24} md={6}>{isLoggedIn ?<UserProfile/>:<Login/>}</Col>
            <Col xs={24} md={12}>{children}</Col>
            <Col xs={24} md={6}>
                <a href='https://www.naver.com' target="_blank" rel='noreferrer noopener'>naver</a>
            </Col>

        </Row>
        {/* xs일때는 모바일사이즈라서 24 가로전체를 차지하고 이고 md일때는 한가로에서 3개크기만큼등분된다 */}
        
        
    </div>
        
  )
}

AppLayouts.propTypes={
    children:PropTypes.node.isRequired,
}



export default AppLayouts