import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useRef, useEffect, useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const { location } = useRouterState()
  const isLoginRoute = location.pathname === '/login'
  
  const loadingRef = useRef<HTMLDivElement | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Start closed on mobile
  
  useEffect(() => {
    loadingRef.current?.classList.add('hidden')
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true) // Open on desktop
      } else {
        setIsSidebarOpen(false) // Close on mobile
      }
    }
    
    // Set initial state
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return isLoginRoute ? (
    <Outlet />
  ) : (
    <div className="flex min-h-screen bg-gray-50">
      {/* Loading Screen */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50"
        style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <span>Loading...</span>
        </div>
      </div>

      {/* Sidebar Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative z-40 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isSidebarOpen ? 'lg:translate-x-0' : 'lg:translate-x-0'}
      `}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen w-full lg:w-auto">
        {/* Header */}
        <header className="flex-shrink-0 border-b bg-white shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 transition-colors"
                aria-label="Toggle sidebar"
              >
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    isSidebarOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>           
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Optional: Add notifications, user menu, etc. */}
              <span className="text-sm text-gray-700 hidden sm:inline">
                Welcome, Mohit
              </span>
              <span className="text-sm text-gray-700 sm:hidden">
                Mohit
              </span>
            </div>
          </div>
        </header>

        {/* Main content scrollable */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-4 lg:p-6 max-w-full">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="flex-shrink-0 border-t bg-white">
          <div className="px-4 py-3 lg:px-6 text-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Uttarakhand Jal Sansthan, All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Designed, Developed, Hosted and Maintained by ITDA, Government of Uttarakhand.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}