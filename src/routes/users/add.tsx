import { createFileRoute } from '@tanstack/react-router'
import UserForm from '@/components/user/UserForm'

export const Route = createFileRoute('/users/add')({
  component: () => {
    const handleAddUser = (data: any) => {
      console.log('Add User:', data)
      // TODO: Submit to backend
    }

    return <UserForm mode="add" onSubmit={handleAddUser} />
  },
})
