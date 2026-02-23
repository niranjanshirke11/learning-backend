import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [post, setpost] = useState([{
        _id: "1",
        image: "https://ik.imagekit.io/ie9ngws2jv/image_ABVwTAdzO.jpg",
        caption: "hello"
    }])
    useEffect(() => {
        axios.get("http://localhost:4000/post")
            .then((res) => {
                setpost(res.data.uplodedpost)
                console.log(res.data)
            })
    }, []);
    return (
        <section className='feed-section'>
            {post.map((post) => (
                <div key={post._id} className='post'>
                    <img src={post.image} alt="" />
                    <p>{post.caption}</p>
                </div>
            ))}
        </section>

    )
}

export default Feed