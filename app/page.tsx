import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[#1a2e1a]"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Youtube%20Banner%20no%20words,%20pattern-A9YkD0tAiTv75MTqCFp077KJoqNtS1.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.8'
        }}
      />

      {/* Main Content */}
      <div className="relative pt-32 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8">
            PYTHONESS PROGRAMMER
          </h1>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl inline-block border-b-2 border-green-400 pb-2">
              NURTURE YOUR SMALL BUSINESS WITH HEARTFELT TECH GUIDANCE
            </h2>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-200">
            Digital Artist Witch, Focused Personal Sessions, Community Workshops
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <Link
              href="/sessions"
              className="px-8 py-3 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-[#1a2e1a] transition-colors"
            >
              Focused Personal Sessions
            </Link>
            <Link
              href="/workshops"
              className="px-8 py-3 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-[#1a2e1a] transition-colors"
            >
              Community Workshops
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120V0C480 80 960 80 1440 0V120H0Z"
            fill="#E6E6FA"
          />
        </svg>
      </div>
    </div>
  )
}

