import React from 'react'
import 'antd/dist/antd.css'

import wrapper from '../store/configureStore'
const App = ({Component}) => {
  return (
    <div>
        <Component></Component>
    </div>
  )
}

export default wrapper.withRedux(App) 