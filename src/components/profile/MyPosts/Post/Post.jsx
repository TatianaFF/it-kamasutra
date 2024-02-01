import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://psy.su/mod_files/gazeta/img_img_gazeta_8966.jpg?1617182416'/>
            {props.message}
        </div>
    )
}

export default Post