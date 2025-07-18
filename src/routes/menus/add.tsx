// src/routes/banner/add.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import MenuForm from "@/components/menus/MenuForm";

export const Route = createFileRoute('/menus/add')({
  component: MenuPage,
})

type MenuData = {
  title: string;
  url: string;
  parentId: string | number | null;
  position: string;
  icon: string;
  sortOrder: number;
  status: string;
};

type Option = {
  label: string;
  value: string | number;
};

export default function MenuPage() {
  const [formState, setFormState] = useState<MenuData>({
    title: "",
    url: "",
    parentId: "",
    position: "sidebar",
    icon: "",
    sortOrder: 0,
    status: "Active",
  });

  const [editingMenu, setEditingMenu] = useState<MenuData | undefined>(undefined);

  const [menuList, setMenuList] = useState<Option[]>([
    { label: "Home", value: 1 },
    { label: "Services", value: 2 },
  ]);

  const handleChange = (key: keyof MenuData, value: any) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingMenu) {
      console.log("Updating menu:", formState);
    } else {
      console.log("Creating menu:", formState);
    }
    // Reset form
    setFormState({
      title: "",
      url: "",
      parentId: "",
      position: "sidebar",
      icon: "",
      sortOrder: 0,
      status: "Active",
    });
    setEditingMenu(undefined);
  };

  const pages = [
    { label: "About Us", value: 1 },
    { label: "Contact", value: 2 },
    { label: "Privacy Policy", value: 3 },
    { label: "Terms & Conditions", value: 4 },
    { label: "Services", value: 5 },
    { label: "FAQ", value: 6 },
  ];


  const pageOptions = pages.map((page) => ({
    label: page.label,
    value: page.value,
  }));

  return (
    <MenuForm
      menuData={formState}
      onChange={handleChange}
      onSubmit={handleSubmit}
      parentOptions={menuList}
      pageOptions={pageOptions}
      initialData={editingMenu}
    />
  );
}

