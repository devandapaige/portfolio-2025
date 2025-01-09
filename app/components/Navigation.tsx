import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-24 h-24">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pythonesslogo-RjtH7a2mSh7zzFcWtBZABcGl6k5rpH.png"
              alt="Pythoness Programmer"
              width={96}
              height={96}
              className="w-full h-full"
            />
          </Link>
          <ul className="flex space-x-8 text-white">
            <li><Link href="/about" className="hover:text-green-300">About</Link></li>
            <li><Link href="/blog" className="hover:text-green-300">Blog</Link></li>
            <li>
              <a 
                href="https://pythonessnetwork.com" 
                className="hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network
              </a>
            </li>
            <li>
              <a 
                href="https://stickyspells.com" 
                className="hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

