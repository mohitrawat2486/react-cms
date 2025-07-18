// src/components/banner/BannerList.tsx

import { PencilIcon, TrashIcon} from 'lucide-react'
import { Link } from '@tanstack/react-router'

type Banner = {
  id: string
  title: string
  imageUrl: string
  status: 'Active' | 'Inactive'
}

const dummyBanners: Banner[] = [
  {
    id: '1',
    title: 'Summer Sale',
    imageUrl: 'https://via.placeholder.com/150',
    status: 'Active',
  },
  {
    id: '2',
    title: 'Winter Deals',
    imageUrl: 'https://via.placeholder.com/150',
    status: 'Inactive',
  },
]

export const BannerList = () => {
  return (
    <div className="p-6 bg-white rounded shadow min-h-120">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Banners Management</h2>
        <Link to="/banners/add" className="inline-block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Add Banner
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Image</th>
              <th className="text-left px-4 py-2 border">Title</th>
              <th className="text-left px-4 py-2 border">Status</th>
              <th className="text-center px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyBanners.map((banner) => (
              <tr key={banner.id}>
                <td className="px-4 py-2 border">
                  <img src={banner.imageUrl} alt={banner.title} className="w-16 h-10 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border">{banner.title}</td>
                <td className="px-4 py-2 border">
                  <span className={`text-sm font-medium ${banner.status === 'Active' ? 'text-green-600' : 'text-gray-400'}`}>
                    {banner.status}
                  </span>
                </td>
                <td className="px-4 py-2 border text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <button title="Edit" className="text-yellow-600 hover:text-yellow-800">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button title="Delete" className="text-red-600 hover:text-red-800">
                      <TrashIcon className="w-4 h-4" />
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
