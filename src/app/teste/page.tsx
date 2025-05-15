'use client'

import { useEffect, useState } from "react"

export default function PageTeste() {

  const [posts, setPosts] = useState([])


  useEffect(() => {

    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))

  }, [])

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Página Client
      </h1>

      <div className="flex flex-col gap-4 mx-2">

        {posts.map((post: any) => (
          <div className="bg-gray-300 p-2 rounded-b-md" key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    </div>
  )

}