import Link from "next/link"
export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-xl">Oh louco</h1>
      <p>Essa página que tentou acessar não existe</p>
      <Link href="/">Voltar para home</Link>
    </div>
  )
}
