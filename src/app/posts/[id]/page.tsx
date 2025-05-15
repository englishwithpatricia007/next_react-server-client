import { Suspense } from "react"
import { PostProps } from "../page"
import { PostInfo } from "./components/post-info"

export default async function DetailPost({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params
  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const data: PostProps = await response.json()

  return (
    <div >
      <h1 className="text-4xl font-bold text-center"> Detalhes do Post: {id} </h1>
      <Suspense fallback={<h1>Carregando....</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  )
}