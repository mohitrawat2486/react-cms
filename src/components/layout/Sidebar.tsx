import { useNavigate } from '@tanstack/react-router'
import type { FC } from 'react'
import { sideBarMenuItems } from '@/data/sideBarMenuItems'

interface SidebarProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate({ to: '/login' })
  }

  return (
    <aside
      className={`fixed inset-y-0 z-20 flex flex-col transition-all transform bg-white border-r shadow-lg max-h-screen lg:static lg:z-auto lg:shadow-none ${isSidebarOpen ? 'w-64' : 'w-20 -translate-x-full lg:translate-x-0'
        }`}
    >
      <div className={`flex items-center justify-between p-2 ${!isSidebarOpen ? 'lg:justify-center' : ''}`}>
        {isSidebarOpen ? (
          <img src="/logo.png" alt="UBWS Logo" className="w-60 h-18" />
        ) : (
          <span className="text-xl font-bold text-black">CWBS</span>
        )}

        <button onClick={toggleSidebar} className="p-2 rounded-md lg:hidden">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
        <ul className="p-2">
          {sideBarMenuItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className={`flex items-center p-2 space-x-2 rounded-md text-black hover:bg-gray-100 hover:text-black ${!isSidebarOpen ? 'justify-center' : ''
                  }`}
              >
                <span><Icon /></span>
                <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-2 border-t">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-2 space-x-1 text-black border rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
