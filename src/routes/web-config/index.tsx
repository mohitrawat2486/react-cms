import { createFileRoute } from '@tanstack/react-router'
import { WebConfigForm } from '@/components/web-config/webConfigFrom'
export const Route = createFileRoute('/web-config/')({
  component: WebConfigForm,
})


