import axios from 'axios';
import {useEffect, useState} from 'react';
import { BACKEND_URL } from '../config';

 export interface Blog{
    "content":string,
    "title":string,
    "id":string,
    "author":string,
    "authorId"?:string,
    "published"?:string
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState<boolean>(true);
    const [blog,setBlog]=useState<Blog>();

    useEffect(()=>{
        const token =localStorage.getItem('token')
        axios.get(`${BACKEND_URL}/api/v1/blogs/${id}`,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(response=>{
            console.log("Single",blog)
            setBlog(response.data);
            setLoading(false);
        })
    },[id])

    return {loading,blog}
}
export const useBlogs=()=>{
    const [loading,setLoading] =useState<boolean>(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);

    useEffect(()=>{
        const token =localStorage.getItem('token')
      axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then((response)=>{
            setBlogs(response.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error)
            setLoading(false);
        })
    },[])

    return {loading,blogs}
}