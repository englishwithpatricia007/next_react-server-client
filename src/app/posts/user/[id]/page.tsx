import { Suspense } from "react"
import { ResponseProps } from "@/app/posts/page"
import Link from "next/link"

export default async function UserPosts({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params
  const response = await fetch(`https://dummyjson.com/posts/user/${id}`)
  const data: ResponseProps = await response.json()

  return (
    <div className="flex flex-col gap-2">
      {data.posts.map(post => (
        <div className="bg-gray-300 p-2 rounded-b-md" key={post.id}>
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}