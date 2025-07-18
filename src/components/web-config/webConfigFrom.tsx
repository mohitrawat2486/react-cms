import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export const WebConfigForm = () => {
    const [formData, setFormData] = useState({
        logo: null as File | null,
        additionalLogos: [] as File[],
        titleEn: "",
        titleHi: "",
        email: "",
        stateEn: "",
        stateHi: "",
        officeAddressHi:"",
        officeAddressEn:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (!files) return;

        if (name === "logo") {
            setFormData(prev => ({ ...prev, logo: files[0] }));
        } else if (name === "additionalLogos") {
            setFormData(prev => ({ ...prev, additionalLogos: Array.from(files) }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded shadow border border-gray-200 px-5 py-1"
        >
            <h2 className="text-xl font-bold mb-6">Website Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <Input
                    label="Logo (Main)"
                    name="logo"
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full"
                />

                <Input
                    label="Additional Logos"
                    name="additionalLogos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="w-full"
                />

                <Input
                    label="Website Title (हिंदी)"
                    name="titleHi"
                    value={formData.titleHi}
                    onChange={handleChange}
                    className="w-full"
                />

                <Input
                    label="Website Title (English)"
                    name="titleEn"
                    value={formData.titleEn}
                    onChange={handleChange}
                    className="w-full"
                />               

                <Input
                    label="State Name (हिंदी)"
                    name="stateHi"
                    value={formData.stateHi}
                    onChange={handleChange}
                    className="w-full"
                />                

                <Input
                    label="State Name (English)"
                    name="stateEn"
                    value={formData.stateEn}
                    onChange={handleChange}
                    className="w-full"
                />

                <Input
                    label="Office Address (हिंदी)"
                    name="officeAddressHi"
                    value={formData.officeAddressHi}
                    onChange={handleChange}
                    className="w-full"
                />

                <Input
                    label="Office Address (English)"
                    name="officeAddressEn"
                    value={formData.officeAddressEn}
                    onChange={handleChange}
                    className="w-full"
                />

                <Input
                    label="Official Email ID"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>

            <div className="mb-5">
               <div className="pt-4 flex justify-end gap-2">
                    <Button type="submit">
                        Save  Settings
                    </Button>
                </div>
            </div>
        </form>
    );
};
