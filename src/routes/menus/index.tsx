import { createFileRoute } from '@tanstack/react-router'
import { MenuList } from '@/components/menus/MenuList'
export const Route = createFileRoute('/menus/')({
  component: MenuList,
})

