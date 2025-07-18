// src/components/banner/BannerForm.tsx

import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import FileInput from '@/components/ui/FileInput'
import SelectInput from '@/components/ui/SelectInput';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

type BannerFormProps = {
    initialData?: {
        title: string
        imageUrl: string
        status: 'Active' | 'Inactive'
    }
    onSubmit?: (data: any) => void
}

export const BannerForm = ({ initialData, onSubmit }: BannerFormProps) => {
    const [title, setTitle] = useState(initialData?.title || '')
    const [status, setStatus] = useState('Active');

    const statusOptions = [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
    ]

    const navigate = useNavigate()
    const handleCancel = () => {
        navigate({ to: "/banners" });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = { title, status }
        if (onSubmit) {
            onSubmit(formData)
        } else {
            // default behavior
            console.log('Form submitted:', formData)
            navigate({ to: '/banner' })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 px-4 py-2 w-full bg-white rounded shadow border border-gray-200">
            <h2 className="text-xl font-bold">{initialData ? 'Edit Banner' : 'Add Banner'}</h2>

            <div>
                <Input
                    label="Title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-1/2"
                    required
                />
            </div>

            <div>
                <FileInput
                    label="Banner Image"
                    name="bannerImage"
                    onChange={(e) => console.log(e.target.files)}
                    className="w-1/2"
                />
            </div>

            <div className=''>
                <SelectInput
                    label="Status"
                    name="status"
                    value={status}
                    onChange={setStatus}
                    options={statusOptions}
                    className="w-1/2 pr-2"
                />
            </div>

            <div className="pt-4 flex justify-end gap-3">
                <Button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>

                <Button type="submit">
                    {initialData ? "Update" : "Add"} Menu
                </Button>
            </div>
        </form>
    )
}
