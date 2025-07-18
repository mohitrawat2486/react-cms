import { useState } from "react";
import { Link } from '@tanstack/react-router'
const mockMenus = [
  { "id": 1, "title": "Home", "url": "/home", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 1 },
  { "id": 2, "title": "Consumer Self Services", "url": "/consumer-services", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 2 },
  { "id": 21, "title": "Apply New Connection", "url": "/consumer-services/apply-connection", "parentId": 2, "position": "Sub", "status": "Active", "sortOrder": 1 },
  { "id": 22, "title": "View Bill", "url": "/consumer-services/view-bill", "parentId": 2, "position": "Sub", "status": "Active", "sortOrder": 2 },
  { "id": 3, "title": "Acts & Rules", "url": "/acts-rules", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 3 },
  { "id": 4, "title": "Notification", "url": "/notification", "parentId": null, "position": "Top", "status": "Inactive", "sortOrder": 4 },
  { "id": 5, "title": "Plumber List", "url": "/plumbers", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 5 },
  { "id": 6, "title": "FAQ", "url": "/faq", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 6 },
  { "id": 7, "title": "Help Desk", "url": "/helpdesk", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 7 },
  { "id": 71, "title": "Raise Ticket", "url": "/helpdesk/ticket", "parentId": 7, "position": "Sub", "status": "Active", "sortOrder": 1 },
  { "id": 72, "title": "Track Status", "url": "/helpdesk/status", "parentId": 7, "position": "Sub", "status": "Active", "sortOrder": 2 },
  { "id": 8, "title": "Complaint", "url": "/complaint", "parentId": null, "position": "Top", "status": "Inactive", "sortOrder": 8 },
  { "id": 9, "title": "Quick Payment", "url": "/quick-payment", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 9 },
  { "id": 10, "title": "Collection Center", "url": "/collection-center", "parentId": null, "position": "Top", "status": "Active", "sortOrder": 10 },
  { "id": 101, "title": "Center List", "url": "/collection-center/list", "parentId": 10, "position": "Sub", "status": "Active", "sortOrder": 1 },
  { "id": 102, "title": "Add Center", "url": "/collection-center/add", "parentId": 10, "position": "Sub", "status": "Active", "sortOrder": 2 }
]

export const MenuList = () => {
  const [menus, setMenus] = useState(mockMenus);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    parentId: "",
    position: "sidebar",
    icon: "",
    sortOrder: 1,
    status: "Active",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(menus.length / perPage);
  const paginatedMenus = menus.slice((currentPage - 1) * perPage, currentPage * perPage);

  const getParentTitle = (id: string | number) => {
    const found = menus.find((m) => m.id === id);
    return found ? found.title : "-";
  };

  return (
    <div className="p-6 space-y-2 min-h-130 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Menu List</h3>
         <Link to="/menus/add" className="inline-block">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Menu
            </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">URL</th>
              <th className="px-4 py-2">Parent</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Order</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMenus.map((menu, index) => (
              <tr key={menu.id} className="border-t">
                <td className="px-4 py-2">{(currentPage - 1) * perPage + index + 1}</td>
                <td className="px-4 py-2">{menu.title}</td>
                <td className="px-4 py-2">{menu.url}</td>
                <td className="px-4 py-2">{getParentTitle(menu.parentId)}</td>
                <td className="px-4 py-2">{menu.position}</td>
                <td className="px-4 py-2">{menu.status}</td>
                <td className="px-4 py-2">{menu.sortOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
