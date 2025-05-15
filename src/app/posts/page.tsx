//SERVER COMPONENT

import { Button } from "@/componentes/button"
import Link from "next/link"
import SearchUserForm from "@/componentes/searchUserForm"


export interface PostProps {
  id: number,
  title: string,
  body: string,
  userId: number,
}
export interface ResponseProps {
  posts: PostProps[]
}

export const revalidate = 60

export default async function PostsPage() {
  const response = await fetch('https://dummyjson.com/posts', { cache: 'force-cache', next: { revalidate: 60 } })
  const data: ResponseProps = await response.json()


  async function handleFetchPosts() {
    'use server'
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    console.log(data.posts)
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Todos os Posts
      </h1>

      <Button />

      <button onClick={handleFetchPosts}>Buscar posts</button>


      <SearchUserForm />

      <div className="flex flex-col gap-2">
        {data.posts.map((post) => (
          <div className="bg-gray-300 p-2 rounded-b-md" key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link className="text-blue-900" href={`posts/${post.id}`}>
              Acessar detalhes
            </Link>
          </div>
        ))}
      </div>

    </div>
  )


}
