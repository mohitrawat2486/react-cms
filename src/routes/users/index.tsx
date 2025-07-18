// src/routes/user.tsx
import { createFileRoute } from '@tanstack/react-router'
import UserList from '@/components/user/UserList'

export const Route = createFileRoute('/users/')({
  component: UserList,
})
