import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Next JS do zero',
  description: 'Aprendendo NEXT JS do zero com Sujeito Programador',
  openGraph: {
    title: "Aprendendo NEXT JS",
    description: "Aprendendo NEXT JS",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export const revalidate = 60


export default async function Home(props: any) {

  const githubResponse = await fetch('https://api.github.com/users/englishwithpatricia007', { next: { revalidate: 60 } });
  const githubData = await githubResponse.json();
  const avatarUrl = githubData.avatar_url;

  const randomNumber = Math.random() * 10

  return (
    <div>
      <h1>Página Home </h1>
      <h2>Número gerado: {randomNumber}</h2>
      <img src={avatarUrl} />
    </div>
  )


}






