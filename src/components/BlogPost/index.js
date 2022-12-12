import React from 'react';

function BlogPost(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>By {props.author} on {props.datePosted}</p>
      <p>{props.content}</p>
      <img src={props.imageSrc} alt={props.imageAlt}/>
    </div>
  )
}

export default BlogPost