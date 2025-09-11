'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 p-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-500 ${
            clicked ? 'scale-110 rotate-1' : 'scale-100 rotate-0'
          }`}>
            Hello World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to a beautiful, modern web application built with{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>,{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Tailwind CSS</span>, and{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">shadcn/ui</span>
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-6">
          <Button
            onClick={handleClick}
            size="lg"
            className={`px-8 py-4 text-lg font-semibold transition-all duration-300 transform ${
              clicked 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 scale-105 shadow-xl' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
            } hover:scale-105 hover:shadow-lg active:scale-95`}
          >
            {clicked ? '🎉 You clicked me!' : '✨ Click me!'}
          </Button>

          {clicked && (
            <div className="animate-fade-in">
              <p className="text-lg text-gray-600 dark:text-gray-300 animate-bounce">
                Great! The application is working perfectly! 🚀
              </p>
            </div>
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Fast</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Built with Next.js for optimal performance</p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Beautiful</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Styled with Tailwind CSS and shadcn/ui</p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Responsive</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Works perfectly on all device sizes</p>
          </div>
        </div>
      </div>
    </div>
  )
}