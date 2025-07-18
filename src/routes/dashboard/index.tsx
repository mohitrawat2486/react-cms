// src/routes/dashboard.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
})

const metricCards = [
  {
    title: 'Total Users',
    value: '100,221',
    growth: '14%',
    from: '2019',
  },
  {
    title: 'New Signups',
    value: '24,590',
    growth: '10%',
    from: '2019',
  },
  {
    title: 'Total Orders',
    value: '58,320',
    growth: '18%',
    from: '2019',
  },
  {
    title: 'Revenue',
    value: '$1,240,000',
    growth: '22%',
    from: '2019',
  },
]

const users = [
  {
    id: 1,
    name: 'Ahmed Kamel',
    email: 'ahmed.kamel@example.com',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    status: 'Active',
    role: 'Admin',
    avatar:
      'https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    title: 'UI Engineer',
    department: 'Frontend',
    status: 'Active',
    role: 'Editor',
    avatar:
      'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    title: 'Data Analyst',
    department: 'Analytics',
    status: 'Inactive',
    role: 'User',
    avatar:
      'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 4,
    name: 'Mohit Rawat',
    email: 'mohit.rawat@example.com',
    title: 'Lead Developer',
    department: 'Engineering',
    status: 'Active',
    role: 'Admin',
    avatar:
      'https://randomuser.me/api/portraits/men/45.jpg',
  },
]

function Dashboard() {
  return (
    <>
      <div
        className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
      >
        <h3 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((card, index) => (
          <div
            key={index}
            className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-400">{card.title}</span>
                <span className="text-lg font-semibold">{card.value}</span>
              </div>
              <div className="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div className="mt-2">
              <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
                {card.growth}
              </span>
              <span className="ml-2 text-sm text-gray-500">from {card.from}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-xl">Users</h3>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Role
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="transition-all hover:bg-gray-100 hover:shadow-lg">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user.avatar}
                              alt={user.name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.title}</div>
                        <div className="text-sm text-gray-500">{user.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${user.status === 'Active'
                              ? 'text-green-800 bg-green-100'
                              : 'text-red-800 bg-red-100'
                            }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.role}</td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
