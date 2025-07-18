// src/routes/banner/add.tsx
import { createFileRoute } from '@tanstack/react-router'
import { BannerForm } from '@/components/banner/BannerForm'

export const Route = createFileRoute('/banners/add')({
  component: AddBannerPage,
})

function AddBannerPage() {
  return (
      <BannerForm />
  )
}

