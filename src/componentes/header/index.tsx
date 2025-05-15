import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <div>
          NextJS
        </div>

        <nav className="ml-4">
          <ul className="flex space-x-4">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/posts'}>Posts</Link>
            </li>
            <li>
              <Link href={'/dashboard'}>Painel</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}