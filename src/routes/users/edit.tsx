import { createFileRoute } from '@tanstack/react-router'
import UserForm from '@/components/user/UserForm'
import type { UserData } from '@/components/user/UserForm'

export const Route = createFileRoute('/users/edit')({
  component: () => {
    // Sample: fetch from backend using userId param
    const mockData: UserData = {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
    }

    const handleUpdate = (updatedData: UserData) => {
      console.log('Update User:', updatedData)
      // TODO: update backend
    }

    return <UserForm mode="edit" initialValues={mockData} onSubmit={handleUpdate} />
  },
})
