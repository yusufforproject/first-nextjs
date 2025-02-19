import React from 'react'
import CardList from '../components/Posts/CardList'
import ViewUserButton from '../components/Posts/ViewUserButton'
import { env } from 'process'

interface Iposts {
    // userId: number,
    id: number,
    title: string,
    content: string
}

const Posts = async () => {
    const response = await fetch(env.BASE_URL + '/api/posts', {cache: 'no-store'})
    const posts: Iposts[] = await response.json()

    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <div className='bg-blue-500'>Posts Page</div>
            {posts.map((post) => {
                return (
                    <CardList>
                        <div key={post.id}>
                            <p>{post.id}</p>
                            <h4>{post.title}</h4>
                            <i>{post.content}</i>
                            <ViewUserButton userId={post.id} />
                        </div>
                    </CardList>
                )
            })}
        </>
    )
}

export default Posts

// "use client";

// import { useState, useEffect } from "react";

// export default function Posts() {
//   const [posts, setPosts] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("/api/posts")
//       .then((res) => res.json())
//       .then(setPosts);
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }