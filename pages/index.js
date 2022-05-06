
import Link from 'next/link'

export async function getStaticProps() {
  return { props: { bodyClass: "bg-blue-300"}};
}

export default function Home() {
  return (
    <div>
      <h1 className="mt-10 text-center text-3xl mb-1 font-extrabold tracking-tight text-gray-900">
        Home Page
      </h1>

      <div className="mt-10 text-center text-2xl mb-1 font-bold tracking-tight text-gray-900">
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>
    </div>
  )
}
