// src/components/UserList.tsx
import { PencilIcon, EyeIcon, TrashIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'
const users = [
    {
        id: 1,
        name: 'Mohit Rawat',
        email: 'mohit@example.com',
        role: 'Admin',
        status: 'Active',
        createdAt: '2023-01-12',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya@example.com',
        role: 'Editor',
        status: 'Inactive',
        createdAt: '2023-02-18',
    },
    {
        id: 3,
        name: 'Anil Verma',
        email: 'anil@example.com',
        role: 'Viewer',
        status: 'Active',
        createdAt: '2023-03-25',
    },
    // Add more if needed...
]

export default function UserList() {
    return (
        <div className="p-6 bg-white rounded shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">User Management</h2>
                <Link to="/users/add" className="inline-block">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        + Add User
                    </button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-2 border">ID</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Role</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Created At</th>
                            <th className="px-4 py-2 border text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{user.id}</td>
                                <td className="px-4 py-2 border">{user.name}</td>
                                <td className="px-4 py-2 border">{user.email}</td>
                                <td className="px-4 py-2 border">{user.role}</td>
                                <td className="px-4 py-2 border">
                                    <span className={`px-2 py-1 rounded text-white text-xs ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 border">{user.createdAt}</td>
                                <td className="px-4 py-2 border text-center">
                                    <div className="flex items-center justify-center space-x-0.5">
                                        <button title="View" className="text-blue-600 hover:text-blue-800">
                                            <EyeIcon className="w-4 h-4 align-middle" />
                                        </button>
                                        <button title="Edit" className="text-yellow-600 hover:text-yellow-800">
                                            <PencilIcon className="w-4 h-4 align-middle" />
                                        </button>
                                        <button title="Delete" className="text-red-600 hover:text-red-800">
                                            <TrashIcon className="w-4 h-4 align-middle" />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
