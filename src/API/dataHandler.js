import { useState, useEffect } from 'react';
import axios from 'axios';

function DataHandler() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then (res => {
            setPosts(res.data)
            console.log(res.data)
        })
        .catch (err => {
            console.log(err.message)
        })
      });

      return(
        <>
        {posts.map(post => {post.name})}
        </>
    )
}

export default DataHandler;