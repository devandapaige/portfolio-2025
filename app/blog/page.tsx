import Link from 'next/link'

// This would typically come from a database or CMS
const blogPosts = [
  { id: 1, title: 'My Creative Process', date: '2023-06-15' },
  { id: 2, title: 'Exploring New Mediums', date: '2023-07-01' },
  { id: 3, title: 'The Intersection of Art and Technology', date: '2023-07-15' },
]

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-500">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

