import { func } from 'prop-types'
import {all,fork,call,take,put, takeEvery, takeLatest, delay} from 'redux-saga/effects'

import axios from 'axios'


import postSaga from './post'
import  userSaga from './user'

export default function* rootSaga(){

    yield all([
        fork(postSaga),
        fork(userSaga),
    
    ])

}


//takeLatest는 여러번요청해도 마지막 요청만 실행 단 전요청이 로딩중일때만 무시 
//그리고 프론트에서 백으로 요청한걸 무시하는게아니라 백에서 프론트로 응답한걸무시한다




//all은 배열을받고 배열안에있는걸 다 실행시켜준다
//fork는 함수를 실행하는것 (비동기함수호출)
//call은 함수를 실행하는것 (동기함수호출)