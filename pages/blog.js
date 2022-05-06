import posts from '../posts.json';
import Link from 'next/link';

export async function getStaticProps() {
  return { props: { bodyClass: "bg-cyan-200"}};
}

export default function Blog() {

    return (
      <div>
        <h1 className="mt-10 text-center text-3xl mb-1 font-extrabold tracking-tight text-gray-900">Blog</h1>

        <ul className="text-center pt-10">
            {Object.keys(posts).map( (slug, index) => {
                return (
                <li className=" text-gray-800 mx-4" key={index}>
                    <Link href='/blog/[id]' as={'/blog/' + slug}>
                        <a>{posts[slug].title}</a>
                    </Link>
                </li>
                )
            })}
        </ul>
      </div>
    )
  }
  