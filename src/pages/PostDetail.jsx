import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SinglePost.css'
const parse = require("html-react-parser")

export default function PostDetail() {
  const {id} = useParams()
  const [post, setPost] = useState([])
  
  const getPost = () => {
      fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPost(data)
      })
    }

    useEffect(() => {
      getPost()
    }, [])
    
  return (
    <div className='SinglePost'>
      Post ID: {id}
      {post && <h2>{post.title}</h2>}
      {post.content && parse(post.content)}
    </div>
  )
}
