import { useState } from 'react'

export type UserData = {
  name: string
  email: string
  role: string
}

type Props = {
  initialValues?: UserData
  mode?: 'add' | 'edit'
  onSubmit: (data: UserData) => void
}

const UserForm = ({ initialValues, onSubmit, mode = 'add' }: Props) => {
  const [formData, setFormData] = useState<UserData>(
    initialValues || { name: '', email: '', role: '' }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">
        {mode === 'edit' ? 'Edit User' : 'Add New User'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Role</label>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          {mode === 'edit' ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default UserForm
