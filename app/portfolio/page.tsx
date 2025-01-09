import Image from 'next/image'

// This would typically come from a database or CMS
const portfolioItems = [
  { id: 1, title: 'Abstract Painting', medium: 'Acrylic on Canvas', year: 2023 },
  { id: 2, title: 'Digital Landscape', medium: 'Digital Art', year: 2023 },
  { id: 3, title: 'Sculptural Installation', medium: 'Mixed Media', year: 2022 },
  { id: 4, title: 'Portrait Series', medium: 'Oil on Canvas', year: 2022 },
  { id: 5, title: 'Conceptual Photography', medium: 'Photography', year: 2021 },
  { id: 6, title: 'Interactive Digital Experience', medium: 'Web-based Art', year: 2021 },
]

export const metadata = {
  title: 'Portfolio | Artist Name',
  description: 'Explore the diverse portfolio of Artist Name, featuring works in various mediums including painting, digital art, sculpture, and more.',
}

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <Image 
              src={`/placeholder.svg?height=300&width=400`} 
              alt={item.title} 
              width={400} 
              height={300} 
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.medium}</p>
              <p className="text-gray-600">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

