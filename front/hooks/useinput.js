import React,{useState,useCallback} from 'react'

export default (initial=null)=>{
    const [value,setValue]=useState(initial)
    const handler=useCallback((e)=>{
        setValue(e.target.value)
    },[])
    return [value,handler]
}