
import {all,fork,call,take,put, takeEvery, takeLatest, delay} from 'redux-saga/effects'

import axios from 'axios'


import {
  
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    generateDummyPost,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
  } from '../reducers/post';
  import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';
import shortid from 'shortid';


function addPostAPI(){
    return axios.post('/api/post')
}



function* addPost(action){

    try{
        const id=shortid.generate()
        yield delay(1000)
        console.log(action.data,'asdsadsa')
        // const result =yield call(logInAPI,action.data) //call은동기니깐 put할때까지 기다려준다
        yield put({
            type:ADD_POST_SUCCESS,
            data:{
                content:action.data,
                id
            }
        })
        yield put({
            type:ADD_POST_TO_ME,
            data:id
        })
        
    }catch(err){
        yield put({
            type: ADD_POST_FAILURE,
            data:err.response.data,
        })
    }
    
}



function removePostAPI(){
    return axios.delete('/api/post')
}



function* removePost(action){

    try{
        // const id=shortid.generate()
        yield delay(1000)
        // console.log(action.data,'asdsadsa')
        // const result =yield call(logInAPI,action.data) //call은동기니깐 put할때까지 기다려준다
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:action.data
        })
        yield put({
            type:REMOVE_POST_OF_ME,
            data:action.data
        })
        
    }catch(err){
        yield put({
            type: REMOVE_POST_FAILURE,
            data:err.response.data,
        })
    }
    
}



function addCommentAPI(){
    return axios.post('/api/COmment')
}



function* addComment(action){

    try{
        yield delay(1000)
        console.log(action.data,'comment')
        // const result =yield call(logInAPI,action.data) //call은동기니깐 put할때까지 기다려준다
        // console.log()
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:action.data
        })
        
    }catch(err){
        if(err){
            console.log(err)
        }
        yield put({
            type: ADD_COMMENT_FAILURE,
            // data:err.response.data,
        })
    }
    
}


function loadPostAPI(){
    return axios.post('/api/COmment')
}



function* loadPost(action){

    try{
        yield delay(1000)
        
        // const result =yield call(logInAPI,action.data) //call은동기니깐 put할때까지 기다려준다
        // console.log()
        yield put({
            type:LOAD_POSTS_SUCCESS,
            data:generateDummyPost(10)
        })
        
    }catch(err){
        if(err){
            console.log(err)
        }
        yield put({
            type: LOAD_POSTS_FAILURE,
            // data:err.response.data,
        })
    }
    
}




function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST,removePost)
    
    
}
function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost)
    
    
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment)
    
    
}
function* watchLoadPost(){
    yield takeLatest(LOAD_POSTS_REQUEST,loadPost)
    //throtle 사용할수있다 5초동안 1번만쓰는것 하지만 쌓어있던게 5초뒤에 요청가니깐 문제가됨
    
}


export default function* postSaga(){
 
    
    yield all([
        fork(watchRemovePost),
        fork(watchLoadPost),

        fork(watchAddPost),
        fork(watchAddComment),
    ])

}