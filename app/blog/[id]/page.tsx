import { notFound } from 'next/navigation'

// This would typically come from a database or CMS
const blogPosts = [
  { id: 1, title: 'My Creative Process', date: '2023-06-15', content: 'Content for post 1...' },
  { id: 2, title: 'Exploring New Mediums', date: '2023-07-01', content: 'Content for post 2...' },
  { id: 3, title: 'The Intersection of Art and Technology', date: '2023-07-15', content: 'Content for post 3...' },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} | Artist Name Blog`,
    description: `Read about ${post.title} in Artist Name's blog.`,
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }
  
  return (
    <article>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </article>
  )
}

