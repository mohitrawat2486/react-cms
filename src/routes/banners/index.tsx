import { createFileRoute } from '@tanstack/react-router'
import { BannerList } from '@/components/banner/BannerList'
export const Route = createFileRoute('/banners/')({
  component: BannerList,
})

