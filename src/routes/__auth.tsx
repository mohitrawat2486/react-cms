import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/__auth')({
  component: AuthLayout,
})

function AuthLayout() {
  const userName = 'Mohit Rawat'

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="text-blue-600 block">Dashboard</a>
          <a href="/users" className="text-blue-600 block">Users</a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold text-xl">My CMS</h1>
          <span>Welcome, {userName}</span>
        </header>

        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
