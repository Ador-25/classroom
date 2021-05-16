import { Avatar, Link } from '@material-ui/core'
import React from 'react'
import './Post.css'
function Post(props) {
    return (
       
            <div className="post">
                
                <div style={{display:'flex',gap:'10px',marginLeft:'30px'}}>
                <Avatar alt={props.postedBy} src="/Pic/index.jpg" style={{marginTop:'10px'}} />
                <Link>
                <p >{props.postedBy}</p>
                </Link>
                
                </div>
                
                <div style={{marginLeft:'30px'}}>
                    {props.content}
                </div>
            </div>
    
    )
}

export default Post
