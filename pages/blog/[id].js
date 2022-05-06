import posts from '../../posts.json'

export default function BlogPost({ post }) {
  return (
    <div>
      <h1 className="mt-10 text-center text-3xl mb-10 font-extrabold tracking-tight text-gray-900">{post.title}</h1>

      <div className="mt-20 mx-auto text-center max-w-3xl px-10">
            <div className="mb-10 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <p className="mt-6 text-gray-500">{post.content}</p>
            </div>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.id],
      bodyClass: "bg-yellow-200",
    },
  }
}